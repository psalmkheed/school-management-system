<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\StateController;
use App\Http\Controllers\StudentController;
use App\Models\Student;
use App\Http\Controllers\SchoolClassController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\AcademicSessionController;
use App\Http\Controllers\TermController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\ClassSubjectController;
use App\Http\Controllers\ParentGuardianController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/students', [StudentController::class, 'store']);
Route::get('/students/check', [StudentController::class, 'checkStudent']);
Route::get('/students', [StudentController::class, 'index']);

Route::get('/school-classes', [SchoolClassController::class, 'index']);
Route::get('/departments', [DepartmentController::class, 'index']);
Route::get('/sessions', [AcademicSessionController::class, 'index']);
Route::get('/terms', [TermController::class, 'index']);
Route::get('/subjects', [SubjectController::class, 'index']);
Route::get('/class-subjects', [ClassSubjectController::class, 'index']);
Route::get('/parent-guardians', [ParentGuardianController::class, 'index']);
Route::post('/parent-guardians', [ParentGuardianController::class, 'store']);
Route::get('/staff', [AuthController::class, 'getStaff']);
Route::get('/states', [StateController::class, 'index']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);