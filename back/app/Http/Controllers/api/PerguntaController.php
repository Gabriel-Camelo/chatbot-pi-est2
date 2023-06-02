<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Pergunta;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PerguntaController extends Controller
{

    public function index()
    {
        $perguntas=Pergunta::all();
        return response()->json($perguntas,200);
    }

    public function getById($id)
    {
        $perguntas=Pergunta::findOrFail($id);
        return response()->json([$perguntas]);
    }

    public function store(Request $request)
    {
        $data=$request->validate(
        [
            'id'=>'integer',
            'pergunta'=>'required|string|max:255',
            'resposta'=>'required|string|max:255'
        ]
        );
        Pergunta::create($data);
        return response()->json(['message'=>'Pergunta gravada com sucesso!'],Response::HTTP_CREATED);
    }

    public function update(Request $request,$id)
    {
        //OFF
    }

    public function remove($id)
    {
        Pergunta::findOrFail($id)->delete();
        return response()->json(['message'=>'Pergunta removida com sucesso!'],Response::HTTP_NO_CONTENT);
    }
}
