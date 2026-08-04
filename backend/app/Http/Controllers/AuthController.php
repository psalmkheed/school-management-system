<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;

class AuthController extends Controller
{
    // login method
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // if user record found in the database
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Invalid credientials',
                'status' => 'error'
            ], 401);
        }

        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;
        session(['user_id' => $user->id]);
        session(['user_name' => $user->name]);
        return response()->json([
            'message' => 'Login successful',
            'status' => 'success',
            'token' => $token,
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role
            ]
        ], 200);
    }

    // register new user
    public function register(Request $request)
    {
        $fillable = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|unique:users',
            'password' => 'required|min:8|confirmed',
        ]);

        try {
            DB::table('users')->insert([
                'name' => $fillable['name'],
                'email' => $fillable['email'],
                'password' => Hash::make($fillable['password']),
                'created_at' => now()->toDateTimeString(),
                'updated_at' => now()->toDateTimeString()
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error registering user',
                'status' => 'error'
            ], 500);
        };

        $user = DB::table('users')->where('email', $fillable['email'])->first();
        session(['user_id' => $user->id]);
        session(['user_name' => $user->name]);
        return response()->json([
            'message' => 'User created successfully',
            'status' => 'success',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ]
        ], 201);
    }

    // logout method
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'You have successfully logged out'
        ]);
    }

    // view all users
    public function index()
    {
        return User::all();
    }
    public function getStaff()
    {
        return User::all();
    }
};
