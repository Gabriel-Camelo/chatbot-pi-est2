<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class apiProtectedRoute extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\HTTP Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        try
        {
            $user=JWTAuth::parseToken()->authenticate();
        }
        catch(Exception $e)
        {
            if($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException)
            {
                return response()->json(['status'=>'Token inválido'],Response::HTTP_BAD_REQUEST);
            }
            else if($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException)
            {
                return response()->json(['status'=>'Token expirado'],Response::HTTP_BAD_REQUEST);
            }
            else
            {
                return response()->json(['status'=>'Token não encontrado'],Response::HTTP_NOT_FOUND);
            }
        }
        return $next($request);
    }
}
