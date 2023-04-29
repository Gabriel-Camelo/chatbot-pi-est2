<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sobre extends Model
{
    protected $table = 'sobre';
    protected $fillable = 
    [
        'id',
        'arquivo'
    ];
}