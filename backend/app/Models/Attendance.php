<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    protected $fillable = [
        'student_id',
        'academic_session_id',
        'attendance_date',
        'status',
        'clock_in',
        'clock_out'
    ];


    public function student()
    {
        return $this->belongsTo(Student::class);
    }


    public function session()
    {
        return $this->belongsTo(AcademicSession::class);
    }
}