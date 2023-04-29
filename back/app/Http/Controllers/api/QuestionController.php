<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Question;

class QuestionController extends Controller
{

    public function index()
    {
        return Question::all();
    }
}