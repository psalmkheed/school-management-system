<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ParentGuardian extends Model
{
    protected $fillable = [
        'full_name',
        'phone',
        'email',
        'occupation',
        'address'
    ];

    public function students()
    {
        return $this->hasMany(Student::class);
    }
}