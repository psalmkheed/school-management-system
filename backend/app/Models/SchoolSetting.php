<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SchoolSetting extends Model
{
    protected $fillable = [
        'school_name',
        'school_motto',
        'phone',
        'alternate_phone',
        'email',
        'website',
        'address',
        'school_logo',
        'principal_name',
        'vice_principal_name',
        'school_stamp',
        'result_signature',
        'current_academic_session_id',
        'current_term_id'
    ];

    public function currentAcademicSession()
    {
        return $this->belongsTo(AcademicSession::class, 'current_academic_session_id');
    }

    public function currentTerm()
    {
        return $this->belongsTo(Term::class, 'current_term_id');
    }
}
