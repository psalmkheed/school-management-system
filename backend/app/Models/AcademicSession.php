<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AcademicSession extends Model
{
    protected $fillable = [
        'session_name',
        'is_current'
    ];

    public function enrollments()
    {
        return $this->hasMany(Enrollment::class);
    }

    public function studentSubjects()
    {
        return $this->hasMany(StudentSubject::class);
    }


    public function results()
    {
        return $this->hasMany(Result::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function exams()
    {
        return $this->hasMany(Exam::class);
    }
}