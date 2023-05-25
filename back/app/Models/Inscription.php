<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Inscription extends Model
{
    use HasFactory;
    protected $table = 'inscricao';
    protected $fillable =
    [
        'id',
        'nome'
    ];
}
