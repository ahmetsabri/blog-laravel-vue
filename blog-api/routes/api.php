<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ShowPostController;
use App\Http\Controllers\IndexPostController;
use App\Http\Controllers\CreatePostController;
use App\Http\Controllers\DeletePostController;
use App\Http\Controllers\UpdatePostController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('post')->middleware('auth:sanctum')->group(function () {
    Route::post('/', CreatePostController::class);
    Route::get('/', IndexPostController::class)->withoutMiddleware('auth:sanctum');
    Route::get('/{post}', ShowPostController::class)->withoutMiddleware('auth:sanctum');
    Route::put('/{post}', UpdatePostController::class);
    Route::delete('/{post}', DeletePostController::class);
});
