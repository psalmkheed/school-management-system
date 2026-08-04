<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudentRequest;
use App\Models\Student;
use Illuminate\Support\Facades\DB;

class StudentController extends Controller
{

    public function store(StoreStudentRequest $request)
    {
        $validated = $request->validated();

        DB::transaction(function () use ($validated, $request) 
        {
            $photoPath = null;
            if ($request->hasFile('photo')) {
                $photoPath = $request->file('photo')->store('student-photos', 'public');
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
                'department_id' => $validated['department_id']?? null,
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
        });

        return response()->json([
            'message' => 'Student registered successfully.'
        ], 201);
    }
    //
}
