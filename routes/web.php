<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\OrdersController;
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

//Главная страница
Route::get('/', function () {
    return view('main');
})->name('main');

//Показать карточки товаров с играми
Route::get('/games/{id}', [ ProductsController::class, 'showGames' ]);

//Показать карточки товаров с консолями
Route::get('/consoles/{id}', [ ProductsController::class, 'showConsoles' ]);

//Корзина
Route::get('/cart', [ CartController::class, 'showCart' ]);

//Добавить в корзину
Route::post('/add-cart/{id}', [ CartController::class, 'addToCart' ]);

//Удалить из корзины
Route::delete('/del-cart/{id}', [ CartController::class, 'deleteFromCart' ]);

//Оформить заказ
Route::put('/make-order', [ OrdersController::class, 'makeOrder' ]);

//Форма входа/личный кабинет
Route::get('/login', function () {
    if (!Auth::check()){
    return view('login');
    }
    else{
        return redirect('/account');
    }
});

//Личный кабинет
Route::get('/account', ['middleware' => 'auth','uses' => 'App\Http\Controllers\AccountController@showAccount' ])->name('account');

//Выход из личного кабинета
Route::get('/exit', [ AccountController::class, 'exitAccount' ]);

//Обновить информацию в личном кабинете
Route::put('/update', [ AccountController::class, 'updateAccount' ]);

//Проверить данные для входа
Route::get('/login-valid', [ LoginController::class, 'login' ]);

//Проверить данные для регистрации
Route::post('/reg-valid', [ RegisterController::class, 'register' ]);





