<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Pergunta;
class KeywordsController extends Controller
{
    public function index($text)
    {
        $text = str_replace(['.', ',', ';', ':', '-', '_', '/', '\'', '"', '\\'], ' ', $text);
        $wordsArray = explode(" ", $text);

        $searches = collect();

        foreach ($wordsArray as $word) {
            if (strlen($word) > 1) {
                $search = Pergunta::whereRaw("CONCAT(' ', pergunta, ' ') REGEXP '[[:<:]]" . preg_quote($word) . "[[:>:]]'")
                    ->select('pergunta', 'resposta')
                    ->get();

                $searches = $searches->concat($search);
            }
        }

        $searches = $searches->groupBy('pergunta')->flatten(2)->unique('pergunta')->values()->toArray();

        return $searches;
    }
}


