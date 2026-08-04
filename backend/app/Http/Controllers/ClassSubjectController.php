<?php

namespace App\Http\Controllers;

use App\Models\ClassSubject;
use Illuminate\Http\Request;

class ClassSubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // app/Http/Controllers/ClassSubjectController.php
    public function index(Request $request)
    {
        return ClassSubject::with('subject')
            ->when($request->filled('school_class_id'), function ($query) use ($request) {
                $query->where('school_class_id', $request->school_class_id);
            })
            ->when($request->filled('department_id'), function ($query) use ($request) {
                $query->where('department_id', $request->department_id);
            })
            ->when($request->filled('search'), function ($query) use ($request) {
                $query->whereHas('subject', function ($q) use ($request) {
                    $q->where('name', 'like', '%' . $request->search . '%');
                });
            })
            ->get();
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
    public function show(ClassSubject $class_Subject)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ClassSubject $class_Subject)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ClassSubject $class_Subject)
    {
        //
    }
}
