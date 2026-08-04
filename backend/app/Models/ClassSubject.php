<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClassSubject extends Model
{
    protected $fillable = [
        'school_class_id',
        'department_id',
        'subject_id',
        'is_compulsory',
    ];


    public function schoolClass()
    {
        return $this->belongsTo(SchoolClass::class);
    }


    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }


    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}