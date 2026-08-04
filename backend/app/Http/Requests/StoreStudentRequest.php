<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Validation rules.
     */
    public function rules(): array
    {
        return [
            // Student
            'student_id' => 'required|string|max:20|unique:students,student_id',
            'first_name' => 'required|string|max:100',
            'other_name' => 'nullable|string|max:100',
            'surname' => 'required|string|max:100',
            'gender' => 'required|in:Male,Female',
            'date_of_birth' => 'required|date',
            'nationality' => 'nullable|string|max:100',
            'state_of_origin' => 'required|string|max:150',
            'address' => 'nullable|string',
            'photo' => 'nullable|image|max:2048',

            // Parent
            'parent_guardian_id' => 'nullable|exists:parent_guardians,id',
            

            // Enrollment
            'school_class_id' => 'required|exists:school_classes,id',
            'department_id' => 'nullable|exists:departments,id',
            'academic_session_id' => 'required|exists:academic_sessions,id',
            'term_id' => 'required|exists:terms,id',
            'status' => 'nullable|in:Active,Inactive,Graduated,Withdrawn',
            'admission_date' => 'nullable|date',

            // Subjects
            'subjects' => 'required|array|min:1',
            'subjects.*' => 'exists:subjects,id',
        ];
    }
}
