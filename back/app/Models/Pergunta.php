<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pergunta extends Model
{

    use HasFactory;
    protected $table = 'pergunta';
    protected $fillable =
    [
        'id',
        'pergunta',
        'resposta'
    ];
}
