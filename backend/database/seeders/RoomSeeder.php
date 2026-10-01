<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Room;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * Idempoten: updateOrCreate berdasarkan nomor kamar agar aman dijalankan ulang.
     */
    public function run(): void
    {
        $rooms = [
            [
                'room_number' => 'A101',
                'image' => 'foto-kost/kamar-01.jpeg',
                'price' => 1250000,
                'description' => 'Kamar bercahaya pagi dengan jendela menghadap halaman tanaman — bangun kedisinian kicau burung. Termasuk kasur, lemari, dan WiFi.',
            ],
            [
                'room_number' => 'A102',
                'image' => 'foto-kost/kamar-02.jpeg',
                'price' => 950000,
                'description' => 'Kamar paling ujung lorong, tenang dan jauh dari lalu-lalang — favorit penghuni yang belajar sampai malam.',
            ],
            [
                'room_number' => 'A103',
                'image' => 'foto-kost/kamar-03.jpeg',
                'price' => 1750000,
                'description' => 'Kamar luas dengan meja kerja menghadap jendela. Cocok untuk pekerja muda yang butuh me time setelah jam kantor.',
            ],
            [
                'room_number' => 'A201',
                'image' => 'foto-kost/kamar-04.jpeg',
                'price' => 850000,
                'description' => 'Kamar mungil nan sejuk, hanya beberapa langkah dari dapur bersama yang selalu wangi. Pas untuk hidup sederhana.',
            ],
            [
                'room_number' => 'A202',
                'image' => 'foto-kost/kamar-05.jpeg',
                'price' => 1500000,
                'description' => 'Kamar bernuansa krem hangat dengan kamar mandi dalam yang selalu bersih. Pagi di sini terasa pelan dan tenang.',
            ],
            [
                'room_number' => 'A203',
                'image' => 'foto-kost/kamar-06.jpeg',
                'price' => 1100000,
                'description' => 'Kamar sederhana nan homey — kasur empuk, lampu kuning hangat, dan selimut tebal untuk tidur yang nyenyak.',
            ],
            [
                'room_number' => 'A204',
                'image' => 'foto-kost/kamar-07.jpeg',
                'price' => 2000000,
                'description' => 'Kamar paling nyaman di lantai dua: pemandangan pohon, AC, dan sudut baca kecil di dekat jendela.',
            ],
        ];

        foreach ($rooms as $room) {
            Room::updateOrCreate(
                ['room_number' => $room['room_number']],
                $room + ['is_available' => true]
            );
        }
    }
}
