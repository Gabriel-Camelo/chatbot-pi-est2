<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Fluxo;

class FluxoController extends Controller
{

    public function index()
    {
       return Fluxo::all();
    }
}
