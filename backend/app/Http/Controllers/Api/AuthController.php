<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller {
    public function register(Request $request) {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        return response()->json(['token' => $user->createToken('token')->plainTextToken], 201);
    }

   public function login(Request $request) {
    $credentials = $request->only('email', 'password');

    if (!$token = auth()->guard('api')->attempt($credentials)) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }

    return response()->json([
        'access_token' => $token,
        'token_type' => 'bearer',
        'expires_in' => auth()->guard('api')->factory()->getTTL() * 60,
        'user' => auth()->guard('api')->user()
    ]);
}

// Tambahkan di AuthController.php
public function me() {
    return response()->json(auth()->guard('api')->user());
}

public function logout() {
    auth()->guard('api')->logout();
    return response()->json(['message' => 'Successfully logged out']);
}
}

?>
