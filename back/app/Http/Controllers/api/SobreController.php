<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Sobre;
use Illuminate\Http\Request;

class SobreController extends Controller
{

    public function index()
    {
       return Sobre::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'mensagem' => 'required|string',
        ]);

        $sobre = Sobre::create($data);

        return response()->json(['message' => 'Mensagem adicionada com sucesso!', 'sobre' => $sobre], 201);
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'mensagem' => 'required|string',
        ]);
        $sobre = Sobre::first();
        $sobre->update($data);
        return response()->json(['message' => 'Mensagem atualizada com sucesso!', 'sobre' => $sobre], 200);
    }

    public function remove()
    {
        Sobre::truncate();
        return response()->json(['message' => 'Sobre removido com sucesso!']);
    }
}
