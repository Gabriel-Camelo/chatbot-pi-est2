<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Http\Request;

class CsrfCookieController extends Controller
{

    public function getCsrfToken(Request $request)
    {
        $token = $request->session()->token();
        $cookie = Cookie::queued(Cookie::forever('XSRF-TOKEN', $token));

        return response()->json(['csrf_token' => $token])->withCookie($cookie);
    }

}
