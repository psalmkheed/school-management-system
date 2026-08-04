<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Term extends Model
{
    //

    protected $fillable = [
        'term_name'
    ];

    public function exams()
    {
        return $this->hasMany(Exam::class);
    }

    public function results()
    {
        return $this->hasMany(Result::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function studentFees()
    {
        return $this->hasMany(StudentFee::class);
    }
}
