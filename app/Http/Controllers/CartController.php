<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CartController extends Controller
{
     public function addToCart($product_id){
         session()->push('in_cart',$product_id);
     }
}
