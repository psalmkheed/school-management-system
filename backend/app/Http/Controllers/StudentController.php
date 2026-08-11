<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreStudentRequest;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;


class StudentController extends Controller
{

    public function index()
    {
        $students = Student::with('enrollments.schoolClass')->get();

        return response()->json($students);
    }

    // check if student id has been assigned earlier
    public function checkStudent(Request $request)
    {
        $student = Student::where(
            'student_id',
            $request->student_id
        )->first();

        return response()->json([
            'exists' => $student !== null
        ]);
    }

    public function store(StoreStudentRequest $request)
    {
        $validated = $request->validated();

        $student = DB::transaction(function () use ($validated, $request) {

            $photoPath = null;

            if ($request->hasFile('photo')) {
                $photoPath = $request->file('photo')
                    ->store('student-photos', 'public');
            }

            $student = Student::create([
                'student_id' => $validated['student_id'],
                'surname' => $validated['surname'],
                'first_name' => $validated['first_name'] ?? null,
                'other_name' => $validated['other_name'] ?? null,
                'gender' => $validated['gender'],
                'date_of_birth' => $validated['date_of_birth'],
                'state_of_origin' => $validated['state_of_origin'],
                'nationality' => $validated['nationality'] ?? null,
                'address' => $validated['address'] ?? null,
                'parent_guardian_id' => $validated['parent_guardian_id'] ?? null,
                'photo' => $photoPath,
            ]);

            $student->enrollments()->create([
                'school_class_id' => $validated['school_class_id'],
                'department_id' => $validated['department_id'] ?? null,
                'academic_session_id' => $validated['academic_session_id'],
                'term_id' => $validated['term_id'],
                'status' => $validated['status'] ?? 'Active',
                'admission_date' => $validated['admission_date'] ?? now()->toDateString(),
            ]);

            $subjects = [];

            foreach ($validated['subjects'] as $subjectId) {
                $subjects[] = [
                    'subject_id' => $subjectId,
                    'academic_session_id' => $validated['academic_session_id'],
                ];
            }

            $student->studentSubjects()->createMany($subjects);

            return $student;
        });

        /*
    |--------------------------------------------------------------------------
    | Notify n8n AFTER successful registration
    |--------------------------------------------------------------------------
    */

        try {
            Http::post(
                env('N8N_STUDENT_REGISTRATION_WEBHOOK'),
                [
                    'event' => 'student.registered',

                    'student' => [
                        'id' => $student->id,
                        'student_id' => $student->student_id,
                        'surname' => $student->surname,
                        'first_name' => $student->first_name,
                        'other_name' => $student->other_name,
                        'gender' => $student->gender,
                        'date_of_birth' => $student->date_of_birth,
                        'state_of_origin' => $student->state_of_origin,
                        'nationality' => $student->nationality,
                        'address' => $student->address,
                        'photo' => $student->photo,
                    ],

                    'registration' => [
                        'school_class_id' => $validated['school_class_id'],
                        'department_id' => $validated['department_id'] ?? null,
                        'academic_session_id' => $validated['academic_session_id'],
                        'term_id' => $validated['term_id'],
                        'status' => $validated['status'] ?? 'Active',
                        'admission_date' => $validated['admission_date'] ?? now()->toDateString(),
                        'subjects' => $validated['subjects'],
                    ],
                ]
            );
        } catch (\Throwable $e) {
            // Don't fail student registration if n8n is unavailable.
            Log::error('Failed to notify n8n about student registration.', [
                'student_id' => $student->id,
                'error' => $e->getMessage(),
            ]);
        }

        return response()->json([
            'message' => 'Student registered successfully.'
        ], 201);
    }
    //
}
