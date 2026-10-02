<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RoomApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_rooms_endpoint_returns_ok(): void
    {
        $response = $this->getJson('/api/rooms');
        $response->assertStatus(200);
    }

    public function test_auth_endpoints_are_not_found(): void
    {
        $this->postJson('/api/login')->assertStatus(404);
        $this->postJson('/api/register')->assertStatus(404);
        $this->getJson('/api/me')->assertStatus(404);
        $this->postJson('/api/logout')->assertStatus(404);
    }
}
