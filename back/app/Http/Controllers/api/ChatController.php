<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Question;

class ChatController extends Controller
{

    public function hello()
    {
        return Question::where('pergunta','hello')->select('resposta')->firstOrFail();
    }
}
