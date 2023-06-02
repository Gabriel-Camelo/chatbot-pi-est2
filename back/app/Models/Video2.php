<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Video2 extends Model
{
    use HasFactory;
    protected $table = 'video2';
    protected $fillable =
    [
        'id',
        'arquivo',
        'titulo'
    ];
}
