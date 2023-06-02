<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Manual;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class ManualController extends Controller
{
    public function index()
    {
        $manuais=Manual::all();
        return response()->json($manuais,200);
    }

    public function getById($id)
    {
        $manual=Manual::findOrFail($id);
        $caminhoArquivo = $manual->arquivo;
        $conteudoArquivo = Storage::get($caminhoArquivo);

        $extensaoArquivo = pathinfo($caminhoArquivo, PATHINFO_EXTENSION);

        // Mapear extensões para tipos de conteúdo
        $tiposConteudo = [
            'jpg' => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'png' => 'image/png',
            'pdf' => 'application/pdf',
            'doc' => 'application/msword',
            'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
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
        $manual=Manual::findOrFail($id);
        return response()->json([$manual],Response::HTTP_OK);
    }

    public function store(Request $request)
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
    }

    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'titulo' => 'required|string',
        ]);

        $manual = Manual::findOrFail($id);
        $manual->update($data);
        $manual->save();

        return response()->json(['message' => 'Título do manual atualizado com sucesso!', 'manual' => $manual], 200);
    }


    public function remove($id)
    {
        $manual = Manual::findOrFail($id);
        $manual->delete();
        $caminhoArquivo = $manual->arquivo;

        if (Storage::exists($caminhoArquivo)) {
            Storage::delete($caminhoArquivo);
            return response()->json(['message' => 'Manual removido com sucesso!']);
        } else {
            return response()->json(['message' => 'Arquivo não encontrado.']);
        }
    }
}
