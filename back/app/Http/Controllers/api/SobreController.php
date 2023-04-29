<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Sobre;

class SobreController extends Controller
{

    public function index()
    {
       return Sobre::all();
    }
}