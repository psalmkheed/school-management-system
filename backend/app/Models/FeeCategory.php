<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FeeCategory extends Model
{
    protected $fillable = [
        'fee_name',
        'fee_description'
    ];


    public function studentFees()
    {
        return $this->hasMany(StudentFee::class);
    }
}
