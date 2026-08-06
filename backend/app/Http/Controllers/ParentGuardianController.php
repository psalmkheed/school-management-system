<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ParentGuardian;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ParentGuardianController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->query('search');

        $parents = ParentGuardian::when($search, function ($query) use ($search) {
            $query->where('full_name', 'like', "%{$search}%")
                ->orWhere('phone', 'like', "%{$search}%");
        })->get();

        if (count($parents) < 1) {
            return response()->json([
                'message' => 'Parent/Guardian record not found.'
            ], 404);
        }

        return response()->json($parents);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //validated submission fields
        $validated = $request->validate([
            'full_name' => 'required|string|max:30',
            'phone' => 'required|string|max:11|unique:parent_guardians,phone',
            'email' => 'nullable|email|unique:parent_guardians,email',
            'occupation' => 'nullable|string',
            'address' => 'nullable|string',

        ]);
        try {
            DB::transaction(
                function () use ($validated) {

                ParentGuardian::create(
                        [
                            'full_name' => $validated['full_name'],
                            'phone' => $validated['phone'],
                            'email' => $validated['email'] ?? null,
                            'occupation' => $validated['occupation'] ?? null,
                            'address' => $validated['address'] ?? null,
                        ]
                    );
                }
            );

            return response()->json([
                'message' => 'Parent/Guardian created successfully'
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to create Parent/Guardian',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    /**
     * Display the specified resource.
     */
    public function show(ParentGuardian $parentGuardian)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ParentGuardian $parentGuardian)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ParentGuardian $parentGuardian)
    {
        //
    }
}
