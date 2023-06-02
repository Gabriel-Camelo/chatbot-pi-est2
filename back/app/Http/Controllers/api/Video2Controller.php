<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\video;
use App\Models\Video2;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class Video2Controller extends Controller
{
    public function index()
    {
        $video=Video2::all();
        return response()->json($video,200);
    }

    public function getById($id)
    {
        $video=Video2::findOrFail($id);
        $caminhoArquivo = $video->arquivo;
        $conteudoArquivo = Storage::get($caminhoArquivo);

        $extensaoArquivo = pathinfo($caminhoArquivo, PATHINFO_EXTENSION);

        // Mapear extensões para tipos de conteúdo
        $tiposConteudo = [
            'mp4' => 'video/mp4'
        ];

        // Verificar se a extensão do arquivo está mapeada
        if (array_key_exists($extensaoArquivo, $tiposConteudo)) {
            $tipoConteudo = $tiposConteudo[$extensaoArquivo];
        } else {
            // Tipo de conteúdo padrão para outros tipos de arquivo
            $tipoConteudo = 'application/octet-stream';
        }

        return response($conteudoArquivo, 200)
        ->header('Content-Type', $tipoConteudo);
    }

    public function getData($id)
    {
        $video=video::findOrFail($id);
        return response()->json([$video],Response::HTTP_OK);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'arquivo' => 'required|file',
            'titulo' => 'required|string',
        ]);

        $arquivo = $request->file('arquivo');
        $caminhoDestino =storage_path('video');
        if (!Storage::exists($caminhoDestino)) {
            Storage::makeDirectory($caminhoDestino);
        }
        $extensoesPermitidas = ['mp4'];
        $nomeArquivo = $arquivo->getClientOriginalName();
        $extensaoArquivo = $arquivo->getClientOriginalExtension();
        if (!in_array($extensaoArquivo, $extensoesPermitidas)) {
            return response()->json(['message' => 'Extensão de arquivo inválida.'], Response::HTTP_BAD_REQUEST);
        }
        $caminhoRelativo = $arquivo->storeAs("videos", $nomeArquivo);

        $data['arquivo'] = $caminhoRelativo;
        Video2::create($data);
        return response()->json(['message' => 'video gravado com sucesso!'], Response::HTTP_CREATED);
    }

    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'titulo' => 'required|string',
        ]);

        $video = Video2::findOrFail($id);
        $video->update($data);
        $video->save();

        return response()->json(['message' => 'Título do video atualizado com sucesso!', 'video' => $video], 200);
    }


    public function remove($id)
    {
        $video = Video2::findOrFail($id);
        $video->delete();
        $caminhoArquivo = $video->arquivo;

        if (Storage::exists($caminhoArquivo)) {
            Storage::delete($caminhoArquivo);
            return response()->json(['message' => 'video removido com sucesso!']);
        } else {
            return response()->json(['message' => 'Arquivo não encontrado.']);
        }
    }
}
