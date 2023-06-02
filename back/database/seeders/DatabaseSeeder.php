<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Database\Seeders\PerguntasSeeder as SeedersPerguntasSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(SeedersPerguntasSeeder::class);

        /* Ambiente de testes
        \App\Models\User::factory(10)->create();
        \App\Models\Edital::factory(10)->create();
        \App\Models\Manual::factory(10)->create();
        \App\Models\Pergunta::factory(10)->create();
        \App\Models\Sobre::factory(10)->create();
        \App\Models\Video::factory(10)->create();
        */
    }
}
