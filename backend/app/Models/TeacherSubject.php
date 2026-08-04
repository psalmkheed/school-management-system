<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TeacherSubject extends Model
{
    protected $fillable = [
        'user_id',
        'subject_id',
        'school_class_id',
        'department_id'
    ];


    public function teacher()
    {
        return $this->belongsTo(User::class, 'user_id');
    }


    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }


    public function schoolClass()
    {
        return $this->belongsTo(SchoolClass::class);
    }


    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}