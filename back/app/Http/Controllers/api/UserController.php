<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        $data['password'] = Hash::make($data['password']); // Criptografa a senha

        User::create($data);

        return response()->json(['message' => 'Usuário registrado com sucesso!'], Response::HTTP_CREATED);
    }

    public function update(Request $request,$id)
    {
        //OFF
    }

    public function remove(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        $credentials = [
            'email' => $data['email'],
            'password' => $data['password'],
        ];

        if (auth('api')->attempt($credentials)) {
            $usuario = User::where('email', $data['email'])->first();
            $usuario->delete();
            return response()->json(['message' => 'Usuário removido com sucesso!']);
        } else {
            return response()->json(['message' => 'Credenciais inválidas. Não foi possível remover o usuário.'], Response::HTTP_UNAUTHORIZED);
        }
    }

}
