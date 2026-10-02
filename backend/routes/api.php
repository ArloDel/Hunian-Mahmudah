<?php

use App\Http\Controllers\Api\RoomController;
use Illuminate\Support\Facades\Route;

Route::get('/rooms', [RoomController::class, 'index']);
Route::get('/rooms/{id}', [RoomController::class, 'show']);
