<?php

use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\EditalController;
use App\Http\Controllers\api\FluxController;
use App\Http\Controllers\api\InscriptionController;
use App\Http\Controllers\api\QuestionController;
use App\Http\Controllers\api\AboutController;
use App\Http\Controllers\api\TutorialController;
use App\Http\Controllers\api\ChatController;
use App\Http\Controllers\api\KeywordsController;
use Illuminate\Support\Facades\Route;




Route::post('login',[AuthController::class,'login']);
//EndPoints de edital que não precisam de Auth

//Pesquisar por id
Route::get('editais/{id}',[EditalController::class,'getById']);

//Listar questões
Route::get('questoes',[QuestionController::class,'getAll']);
Route::get('questoes/{id}',[QuestionController::class,'getById']);

//Listar fluxos
Route::get('fluxos',[FluxController::class,'getAll']);
Route::get('fluxos/{id}',[FluxController::class,'getById']);

//Listar inscrições
Route::get('inscricoes',[InscriptionController::class,'index']);

//Listar tutorias
Route::get('tutoriais',[TutorialController::class,'index']);

//Listar sobre
Route::get('sobre',[AboutController::class,'index']);

//Buscar texto de boas vindas
Route::get('hello',[ChatController::class,'hello']);

//Buscar respostas ao diálogo do usuário
Route::get('keywords/{text}', [KeywordsController::class, 'index']);

 //Listar editais
 Route::get('editais',[EditalController::class,'getAll']);

//Vão precisar de auth
Route::group(['middleware'=>['apiJWT']],function()
{
    //Logout
    Route::post('logout',[AuthController::class,'logout']);
    //Atualizando edital
    Route::patch('editais/{id}',[EditalController::class,'update']);
    //Deletando edital
    Route::delete('editais/{id}',[EditalController::class,'delete']);

    //Inserindo questao
    Route::post('questoes',[QuestionController::class,'insert']);
    //Atualizando questao
    Route::patch('questoes/{id}',[QuestionController::class,'update']);
    //Deletando questao
    Route::delete('questoes/{id}',[QuestionController::class,'delete']);

    //Inserindo fluxo
    Route::post('fluxos',[FluxController::class,'insert']);
    //Atualizando fluxo
    Route::patch('fluxos/{id}',[FluxController::class,'update']);
    //Deletando fluxo
    Route::delete('fluxos/{id}',[FluxController::class,'delete']);
});

