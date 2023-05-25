<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Edital;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EditalController extends Controller
{

    public function getAll(Request $request)
    {
        $editais=Edital::all();
        return response()->json($editais,200);
    }

    public function getById(Request $request,$id)
    {
        $edital=Edital::findOrFail($id);
        return response()->json([$edital]);
    }

    public function insert(Request $request)
    {
        $data=$request->validate(
        [
            'id'=>'required|integer',
            'arquivo'=>'required|string|max:255'
        ]
        );
        Edital::create($data);
        return response()->json(['message'=>'Edital gravado com sucesso!'],Response::HTTP_CREATED);
    }

    public function update(Request $request,$id)
    {
        $data=$request->all();
        $edital=Edital::findOrFail($id);
        $edital->update($data);
        return  response()->json(['message'=>'Edital atualizado com sucesso!'],Response::HTTP_OK);
    }

    public function delete($id)
    {
        Edital::findOrFail($id)->delete();
        return response()->json([],Response::HTTP_NO_CONTENT);
    }
}