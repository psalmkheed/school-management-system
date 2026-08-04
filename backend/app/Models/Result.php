<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    protected $fillable = [
        'student_id',
        'subject_id',
        'academic_session_id',
        'term',
        'first_ca',
        'second_ca',
        'exam_score',
        'total',
        'grade',
        'remark',
        'class_position'
    ];


    public function student()
    {
        return $this->belongsTo(Student::class);
    }


    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }


    public function session()
    {
        return $this->belongsTo(AcademicSession::class);
    }

    public function term()
    {
        return $this->belongsTo(Term::class);
    }
}
