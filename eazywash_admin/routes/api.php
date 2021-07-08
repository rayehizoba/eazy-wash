<?php

use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ClothesController;
use App\Http\Controllers\OffersController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\ServicesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('categories', [CategoriesController::class, 'index']);
Route::get('clothes', [ClothesController::class, 'index']);
Route::get('offers', [OffersController::class, 'index']);
Route::get('services', [ServicesController::class, 'index']);
Route::get('orders', [OrdersController::class, 'index']);
