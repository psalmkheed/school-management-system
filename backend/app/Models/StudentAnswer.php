<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StudentAnswer extends Model
{
    protected $fillable = [
        'student_id',
        'exam_id',
        'question_id',
        'selected_answer',
        'is_correct'
    ];


    public function student()
    {
        return $this->belongsTo(Student::class);
    }


    public function exam()
    {
        return $this->belongsTo(Exam::class);
    }


    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}
