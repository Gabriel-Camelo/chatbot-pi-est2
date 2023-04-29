<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Tutorial;

class TutorialController extends Controller
{

    public function index()
    {
       return Tutorial::all();
    }
}