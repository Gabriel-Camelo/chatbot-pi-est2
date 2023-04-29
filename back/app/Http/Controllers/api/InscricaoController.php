<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Inscricao;

class InscricaoController extends Controller
{

    public function index()
    {
       return Inscricao::all();
    }
}