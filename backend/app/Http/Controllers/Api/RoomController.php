<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Room;

class RoomController extends Controller
{
    public function index()
    {
        return response()->json(Room::orderByDesc('is_available')->get());
    }

    public function show($id)
    {
        return response()->json(Room::findOrFail($id));
    }
}
