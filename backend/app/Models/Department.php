<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $fillable = [
        'department_name',
        'department_code'
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
}