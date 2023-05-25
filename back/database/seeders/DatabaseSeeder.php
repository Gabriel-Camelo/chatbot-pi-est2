<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(10)->create();
        \App\Models\Flux::factory(10)->create();
        \App\Models\Edital::factory(10)->create();
        \App\Models\Inscription::factory(10)->create();
        \App\Models\Question::factory(10)->create();
        \App\Models\About::factory(10)->create();
        \App\Models\Tutorial::factory(10)->create();
        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
