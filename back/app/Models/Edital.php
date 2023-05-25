<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Edital extends Model
{
    use HasFactory;
    protected $table = 'edital';
    protected $fillable = 
    [
        'id',
        'arquivo'
    ];
}