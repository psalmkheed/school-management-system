<?php

namespace App\Models;

use App\Models\Enrollment;
use App\Models\ParentGuardian;
use App\Models\StudentSubject;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'student_id',
        'surname',
        'first_name',
        'other_name',
        'gender',
        'date_of_birth',
        'nationality',
        'state_of_origin',
        'address',
        'photo',
        'parent_guardian_id',
        'is_active'
    ];

    public function parentGuardian()
    {
        return $this->belongsTo(ParentGuardian::class);
    }

    public function enrollments()
    {
        return $this->hasMany(Enrollment::class);
    }

    public function subjects()
    {
        return $this->belongsToMany(
            Subject::class,
            'student_subjects'
        )
            ->withPivot('academic_session_id')
            ->withTimestamps();
    }

    public function studentSubjects()
    {
        return $this->hasMany(StudentSubject::class);
    }

    public function results()
    {
        return $this->hasMany(Result::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function fees()
    {
        return $this->hasMany(StudentFee::class);
    }

    public function attendance()
    {
        return $this->hasMany(Attendance::class);
    }

    public function answers()
    {
        return $this->hasMany(StudentAnswer::class);
    }
}