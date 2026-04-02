<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Room::create([
    'room_number' => 'A101',
    'price' => 1500000,
    'description' => 'Kamar mandi dalam, AC, WiFi',
    'is_available' => true
]);
    }
}
