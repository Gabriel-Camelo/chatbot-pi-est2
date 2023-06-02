<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Pergunta;
class ChatController extends Controller
{

    public function init()
    {
        return Pergunta::where('pergunta','init')->select('resposta')->firstOrFail();
    }
}
