<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flux extends Model
{
    use HasFactory;
    protected $table = 'fluxo';
    protected $fillable =
    [
        'id',
        'arquivo'
    ];
}
