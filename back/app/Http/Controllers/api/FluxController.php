<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Flux;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class FluxController extends Controller
{

    public function getAll(Request $request)
    {
        $editais=Flux::paginate();
        return response()->json($editais,200);
    }

    public function getById(Request $request,$id)
    {
        $fluxo=Flux::findOrFail($id);
        return response()->json([$fluxo]);
    }

    public function insert(Request $request)
    {
        $data=$request->validate(
        [
            'id'=>'required|integer',
            'arquivo'=>'required|string|max:255'
        ]
        );
        Flux::create($data);
        return response()->json(['message'=>'Fluxo gravado com sucesso!'],Response::HTTP_CREATED);
    }

    public function update(Request $request,$id)
    {
        $data=$request->all();
        $fluxo=Flux::findOrFail($id);
        $fluxo->update($data);
        return  response()->json(['message'=>'Fluxo atualizado com sucesso!'],Response::HTTP_OK);
    }

    public function delete($id)
    {
        Flux::findOrFail($id)->delete();
        return response()->json([],Response::HTTP_NO_CONTENT);
    }
}
