<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
    protected $fillable = [
        'title',
        'school_class_id',
        'subject_id',
        'academic_session_id',
        'term_id',
        'duration',
        'total_questions',
        'start_at',
        'status'
    ];


    public function schoolClass()
    {
        return $this->belongsTo(SchoolClass::class);
    }


    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }


    public function session()
    {
        return $this->belongsTo(AcademicSession::class);
    }


    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    public function term()
    {
        return $this->belongsTo(Term::class);
    }
}
