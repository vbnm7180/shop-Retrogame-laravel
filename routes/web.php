<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Models\GamesProduct;

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

/*
Route::get('/', function () {
    return view('welcome');
});
*/


Route::get('/', function () {
    return view('main');
});


Route::get('/cart',function(){
    return view('cart');
});

Route::get('/login', function () {
    return view('login');
});

Route::get('/games/{id}', [ ProductsController::class, 'showGames' ]);

Route::get('/consoles/{id}', [ ProductsController::class, 'showConsoles' ]);

Route::post('/add-cart/{id}', [ CartController::class, 'addToCart' ]);

Route::post('/del-cart/{id}', [ CartController::class, 'deleteFromCart' ]);

Route::get('/login-valid', [ LoginController::class, 'login' ]);

Route::get('/reg-valid', [ RegisterController::class, 'register' ]);
