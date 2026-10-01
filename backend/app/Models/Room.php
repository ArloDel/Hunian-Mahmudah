<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $fillable = ['room_number', 'image', 'price', 'description', 'is_available'];

    /**
     * Kirim path gambar sebagai URL absolut (storage/app/public)
     * agar langsung bisa dipakai sebagai src gambar di frontend.
     */
    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $value ? asset('storage/' . $value) : null,
        );
    }

    public function bookings() {
        return $this->hasMany(Booking::class);
    }
}
