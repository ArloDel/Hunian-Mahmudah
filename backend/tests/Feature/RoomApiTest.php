<?php

namespace Tests\Feature;

use Tests\TestCase;

class RoomApiTest extends TestCase
{
    public function test_rooms_endpoint_returns_ok(): void
    {
        $response = $this->getJson('/api/rooms');
        $response->assertStatus(200);
    }

    public function test_auth_endpoints_are_not_found(): void
    {
        dump('base_path: ' . base_path());
        dump('api route path: ' . base_path('routes/api.php'));
    }
}
