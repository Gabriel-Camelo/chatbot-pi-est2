<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Edital extends Model
{
    protected $table = 'edital';
    protected $fillable = 
    [
        'id',
        'arquivo'
    ];
}