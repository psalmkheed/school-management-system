<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Enrollment extends Model
{
    protected $fillable = [
        'school_class_id',
        'department_id',
        'academic_session_id',
        'term_id',
        'status',
        'admission_date',
    ];

    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function schoolClass()
    {
        return $this->belongsTo(SchoolClass::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function session()
    {
        return $this->belongsTo(AcademicSession::class);
    }
}
