<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Inscription;

class InscriptionController extends Controller
{

    public function index()
    {
       return Inscription::all();
    }
}
