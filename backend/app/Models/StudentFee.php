<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StudentFee extends Model
{
    protected $fillable = [
        'student_id',
        'fee_category_id',
        'academic_session_id',
        'term_id',
        'amount'
    ];


    public function student()
    {
        return $this->belongsTo(Student::class);
    }


    public function feeCategory()
    {
        return $this->belongsTo(FeeCategory::class);
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