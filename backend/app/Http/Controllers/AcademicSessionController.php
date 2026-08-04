<?php

namespace App\Http\Controllers;

use App\Models\AcademicSession;
use Illuminate\Http\Request;

class AcademicSessionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        return AcademicSession::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(AcademicSession $session)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, AcademicSession $session)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AcademicSession $session)
    {
        //
    }
}
