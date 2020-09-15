<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;
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
    $res=GamesProduct::where('category_id','=', 7)->get();
    return view('main')->with('res',$res);
});


Route::get('/cart', function () {
    return view('cart');
});

Route::get('/account', function () {
    if ($_SESSION['login'] == "" && $_SESSION['password'] == "") {
        return view('login');
    } else {
        return view('account');
    }
});

Route::get('/games/{categ}', [ ProductsController::class, 'showGames' ]);
Route::get('/consoles/{categ}', [ ProductsController::class, 'showConsoles' ]);
