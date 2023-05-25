<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RouteTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * Testa se o login está funcionando
     *
     * @return void
     */
    public function testLogin()
    {
        $user = User::factory()->create();
        $response = $this->post('/api/login', [
            'email' => $user->email,
            'password' => 'password',
        ]);
        $response->assertStatus(200);
    }

    /**
     * Testa se a rota getById está funcionando
     *
     * @return void
     */
    public function testGetById()
    {
        $response = $this->get('/api/editais/1');
        $response->assertStatus(200);
    }

    /**
     * Testa se a rota getAll está funcionando
     *
     * @return void
     */
    public function testGetAll()
    {
        $response = $this->get('/api/editais');
        $response->assertStatus(200);
    }

    /**
     * Testa se a rota getByID está funcionando
     *
     * @return void
     */
    public function testGetQuestionById()
    {
        $response = $this->get('/api/questoes/1');
        $response->assertStatus(200);
    }

    /**
     * Testa se a rota getAll está funcionando
     *
     * @return void
     */
    public function testGetAllQuestions()
    {
        $response = $this->get('/api/questoes');
        $response->assertStatus(200);
    }

    /**
     * Testa se a rota getById está funcionando
     *
     * @return void
     */
    public function testGetFluxById()
    {
        $response = $this->get('/api/fluxos/1');
        $response->assertStatus(200);
    }

    /**
     * Testa se a rota getAll está funcionando
     *
     * @return void
     */
    public function testGetAllFluxes()
    {
        $response = $this->get('/api/fluxos');
        $response->assertStatus(200);
    }

    /**
     * Testa se a rota index está funcionando
     *
     * @return void
     */
    public function testGetInscriptions()
    {
        $response = $this->get('/api/inscricoes');
        $response->assertStatus(200);
    }

    /**
     * Testa se a rota index está funcionando
     *
     * @return void
     */
    public function testGetTutorials()
    {
        $response = $this->get('/api/tutoriais');
        $response->assertStatus(200);
    }

    /**
     * Testa se a rota index está funcionando
     *
     * @return void
     */
    public function testGetAbout()
    {
        $response = $this->get('/api/sobre');
        $response->assertStatus(200);
    }

    /**
     * Testa se a rota hello do chat está funcionando
     *
     * @return void
     */
    public function test_chat_hello_route()
    {
        $response = $this->getJson('/api/hello');
        $response->assertOk();
    }

    /**
     * Testa se a rota keywords está funcionando
     *
     * @return void
     */
    public function test_keywords_index_route()
    {
        $response = $this->getJson('/api/keywords/subject/text');
        $response->assertOk();
    }

    public function test_can_get_all_editais()
    {
        $response = $this->getJson('/api/editais');
        $response->assertOk();
    }

}
