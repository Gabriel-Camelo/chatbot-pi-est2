<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class VideoController extends Controller
{

    public function index()
    {
       $videos = Video::all();
       return response()->json($videos,200);
    }

    public function getById($id)
    {
        $tutorial=Video::findOrFail($id);
        return response()->json([$tutorial],Response::HTTP_OK);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'link' => 'required|string',
            'titulo' => 'required|string',
        ]);

        $tutorial = Video::create($data);

        return response()->json(['message' => 'Tutorial adicionado com sucesso!', 'tutorial' => $tutorial], 201);
    }

   /* public function store2(Request $request)
    {
        $data = $request->validate([
            'arquivo' => 'required|file',
            'titulo' => 'required|string',
        ]);

        $arquivo = $request->file('arquivo');
        $caminhoDestino =storage_path('manuais');
        if (!Storage::exists($caminhoDestino)) {
            Storage::makeDirectory($caminhoDestino);
        }
        $extensoesPermitidas = ['png', 'jpg', 'jpeg', 'pdf', 'docx', 'doc'];
        $nomeArquivo = $arquivo->getClientOriginalName();
        $extensaoArquivo = $arquivo->getClientOriginalExtension();
        if (!in_array($extensaoArquivo, $extensoesPermitidas)) {
            return response()->json(['message' => 'Extensão de arquivo inválida.'], Response::HTTP_BAD_REQUEST);
        }
        $caminhoRelativo = $arquivo->storeAs("manuais", $nomeArquivo);

        $data['arquivo'] = $caminhoRelativo;
        Manual::create($data);
        return response()->json(['message' => 'Manual gravado com sucesso!'], Response::HTTP_CREATED);
    }*/

    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'titulo' => 'required|string',
        ]);

        $tutorial = Video::findOrFail($id);
        $tutorial->update($data);
        $tutorial->save();

        return response()->json(['message' => 'Título do tutorial atualizado com sucesso!', 'tutorial' => $tutorial], 200);
    }

    public function remove($id)
    {
        $tutorial = Video::findOrFail($id);
        $tutorial->delete();

        $response = response()->json(['message' => 'Tutorial removido com sucesso!']);

        $response->header('Access-Control-Allow-Origin', '*');
        $response->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        $response->header('Access-Control-Allow-Headers', 'Authorization, Content-Type');
        $response->header('Access-Control-Allow-Credentials', 'true');
        $response->header('Access-Control-Expose-Headers', 'Authorization');
        $response->header('Access-Control-Max-Age', '3600');

    return $response;
    }
}
