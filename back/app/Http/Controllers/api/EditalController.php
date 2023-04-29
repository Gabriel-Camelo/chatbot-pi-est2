<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Edital;

class EditalController extends Controller
{

    public function index()
    {
       return Edital::all();
    }
}