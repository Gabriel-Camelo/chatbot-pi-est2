<?php

use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\EditalController;
use App\Http\Controllers\api\ManualController;
use App\Http\Controllers\api\SobreController;
use App\Http\Controllers\api\VideoController;
use App\Http\Controllers\api\ChatController;
use App\Http\Controllers\api\CsrfCookieController;
use App\Http\Controllers\api\KeywordsController;
use App\Http\Controllers\api\PerguntaController;
use App\Http\Controllers\api\UserController;
use Illuminate\Support\Facades\Route;


//Autenticação
Route::post('login',[AuthController::class,'login']);

//Cadastrar usuário
Route::post('user',[UserController::class, 'store']);
//Remover usuário
Route::delete('user',[UserController::class, 'remove']);


//Listar perguntas
Route::get('perguntas',[PerguntaController::class,'index']);
//Pesquisar por id
Route::get('perguntas/{id}',[PerguntaController::class,'getById']);
//Inserir pergunta
Route::post('perguntas',[PerguntaController::class,'store']);
//Remover pergunta
Route::delete('perguntas/{id}',[PerguntaController::class,'remove']);



//Listar editais
Route::get('editais',[EditalController::class,'index']);
//Pesquisar por id (receber arquivo)
Route::get('editais/{id}',[EditalController::class,'getById']);
//Pesquisar por id (receber dados)
Route::get('dadoseditais/{id}',[EditalController::class,'getData']);
//Inserir edital
Route::post('editais',[EditalController::class,'store']);
//Atualizar sobre
Route::put('editais/{id}',[EditalController::class,'update']);
//Remover edital
Route::delete('editais/{id}',[EditalController::class,'remove']);



//Listar manuais
Route::get('manuais',[ManualController::class,'index']);
//Pesquisar por id (receber arquivo)
Route::get('manuais/{id}',[ManualController::class,'getById']);
//Pesquisar por id (receber dados)
Route::get('dadosmanuais/{id}',[EditalController::class,'getData']);
//Inserir manual
Route::post('manuais',[ManualController::class,'store']);
//Atualizar sobre
Route::put('manuais/{id}',[ManualController::class,'update']);
//Remover manual
Route::delete('manuais/{id}',[ManualController::class,'remove']);


//Listar videos
Route::get('videos',[VideoController::class,'index']);
//Pesquisar por id
Route::get('videos/{id}',[VideoController::class,'getById']);
//Inserir video
Route::post('videos', [VideoController::class, 'store']);
//Atualizar titulo do video (NOTWORKING)
Route::put('videos/{id}',[VideoController::class,'update']);
//Remover video
Route::delete('videos/{id}', [VideoController::class, 'remove']);

/* Implementações futuras
//Listar videos
Route::get('videos2',[Video2Controller::class,'index']);
//Pesquisar por id
Route::get('videos2/{id}',[Video2Controller::class,'getById']);
//Inserir video
Route::post('videos2', [Video2Controller::class, 'store']);
//Atualizar titulo do video (NOTWORKING)
Route::put('videos2/{id}',[Video2Controller::class,'update']);
//Remover video
Route::delete('videos2/{id}', [Video2Controller::class, 'remove']);
*/

//Buscar sobre
Route::get('sobre',[SobreController::class,'index']);
//Inserir sobre
Route::post('sobre',[SobreController::class,'store']);
//Atualizar sobre
Route::put('sobre',[SobreController::class,'update']);
//Remover sobre
Route::delete('sobre',[SobreController::class,'remove']);



//Buscar texto de boas vindas
Route::get('init',[ChatController::class,'init']);

//Buscar respostas ao diálogo do usuário
Route::get('chat/{text}', [KeywordsController::class, 'index']);

Route::get('/csrf-cookie', [CsrfCookieController::class, 'getCsrfToken']);

//Vão precisar de auth
Route::group(['middleware'=>['apiJWT']],function()
{
    Route::post('logout',[AuthController::class,'logout']);
    Route::post('user',[UserController::class, 'store']);
    Route::post('perguntas',[PerguntaController::class,'store']);
    Route::post('sobre',[SobreController::class,'store']);
    Route::post('editais',[EditalController::class,'store']);
    Route::post('manuais',[ManualController::class,'store']);
    Route::post('videos', [VideoController::class, 'store']);

    Route::put('editais/{id}',[EditalController::class,'update']);
    Route::put('manuais/{id}',[ManualController::class,'update']);
    Route::put('videos/{id}',[VideoController::class,'update']);
    Route::put('sobre',[SobreController::class,'update']);

    Route::delete('user',[UserController::class, 'remove']);
    Route::delete('perguntas/{id}',[PerguntaController::class,'remove']);
    Route::delete('editais/{id}',[EditalController::class,'remove']);
    Route::delete('manuais/{id}',[ManualController::class,'remove']);
    Route::delete('videos/{id}', [VideoController::class, 'remove']);
    Route::delete('sobre',[SobreController::class,'remove']);
});
