<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('test', function(){

    broadcast(new \App\Events\Chat\MessageAdded());
});

Auth::routes();

Route::get('/chat', [App\Http\Controllers\ChatController::class, 'index'])->name('home');
Route::get('/chat/{room}', [App\Http\Controllers\ChatController::class, 'show'])->name('chat.room');
