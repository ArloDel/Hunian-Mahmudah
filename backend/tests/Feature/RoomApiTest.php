<?php

namespace Tests\Feature;

use App\Models\Room;
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

    public function test_rooms_endpoint_includes_unavailable_rooms_sorted_last(): void
    {
        Room::create([
            'room_number' => 'A101',
            'image' => null,
            'price' => 1000000,
            'description' => 'Kamar tersedia',
            'is_available' => true,
        ]);
        Room::create([
            'room_number' => 'A204',
            'image' => null,
            'price' => 2000000,
            'description' => 'Kamar penuh',
            'is_available' => false,
        ]);

        $response = $this->getJson('/api/rooms');

        $response->assertStatus(200)
            ->assertJsonCount(2)
            ->assertJsonPath('0.room_number', 'A101')
            ->assertJsonPath('1.room_number', 'A204');
    }

    public function test_auth_endpoints_are_not_found(): void
    {
        $this->postJson('/api/login')->assertStatus(404);
        $this->postJson('/api/register')->assertStatus(404);
        $this->getJson('/api/me')->assertStatus(404);
        $this->postJson('/api/logout')->assertStatus(404);
    }
}
