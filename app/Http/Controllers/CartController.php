<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CartController extends Controller
{
     public function addToCart($product_id){
         session()->push('in_cart',$product_id);

        //Log::info(session()->get('in_cart'));
     }

     public function showCart(){

        //Общее количество
        $total_count=count(session('in_cart')->get());

        //Общая цена
        
     }
}
