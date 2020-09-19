<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\AccountController;
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
})->name('main');


Route::get('/cart', [ CartController::class, 'showCart' ]);

Route::get('/login', function () {
    if (!Auth::check()){
    return view('login');
    }
    else{
        return redirect('/account');
    }
});

Route::get('/exit', [ AccountController::class, 'exitAccount' ]);

Route::get('/update', [ AccountController::class, 'updateAccount' ]);

Route::get('/account', ['middleware' => 'auth','uses' => 'App\Http\Controllers\AccountController@showAccount' ])->name('account');

Route::get('/games/{id}', [ ProductsController::class, 'showGames' ]);

Route::get('/consoles/{id}', [ ProductsController::class, 'showConsoles' ]);

Route::post('/add-cart/{id}', [ CartController::class, 'addToCart' ]);

Route::post('/del-cart/{id}', [ CartController::class, 'deleteFromCart' ]);

Route::get('/login-valid', [ LoginController::class, 'login' ]);

Route::post('/reg-valid', [ RegisterController::class, 'register' ]);
