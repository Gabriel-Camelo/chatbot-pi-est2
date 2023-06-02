<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Manual extends Model
{
    use HasFactory;
    protected $table = 'manual';
    protected $fillable =
    [
        'id',
        'arquivo',
        'titulo'
    ];
}
