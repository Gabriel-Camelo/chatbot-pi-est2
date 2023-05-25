<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\About;

class AboutController extends Controller
{

    public function index()
    {
       return About::all();
    }
}
