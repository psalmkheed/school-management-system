<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SchoolClass extends Model
{
    protected $fillable = [
        'class_name',
        'class_code'
    ];

    public function enrollments()
    {
        return $this->hasMany(Enrollment::class);
    }

    public function subjects()
    {
        return $this->hasMany(ClassSubject::class);
    }

    public function teachers()
    {
        return $this->hasMany(TeacherSubject::class);
    }

    public function exams()
    {
        return $this->hasMany(Exam::class);
    }
}
