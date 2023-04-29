<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tutorial extends Model
{
    protected $table = 'tutorial';
    protected $fillable = 
    [
        'id',
        'arquivo'
    ];
}