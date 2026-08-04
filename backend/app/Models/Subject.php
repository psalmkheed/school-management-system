<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    protected $fillable = [
        'subject_name',
        'subject_code',
        'subject_category'
    ];

    public function classSubjects()
    {
        return $this->hasMany(ClassSubject::class);
    }

    public function studentSubjects()
    {
        return $this->hasMany(StudentSubject::class);
    }

    public function students()
    {
        return $this->belongsToMany(
            Student::class,
            'student_subjects'
        )
            ->withPivot('academic_session_id')
            ->withTimestamps();
    }

    public function teachers()
    {
        return $this->belongsToMany(
            User::class,
            'teacher_subjects'
        )
            ->withPivot([
                'school_class_id',
                'department_id'
            ])
            ->withTimestamps();
    }

    public function exams()
    {
        return $this->hasMany(Exam::class);
    }

    public function results()
    {
        return $this->hasMany(Result::class);
    }
}
