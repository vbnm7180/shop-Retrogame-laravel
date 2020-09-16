<?php

namespace App\Http\Controllers;

use App\Models\ConsolesProduct;
use App\Models\GamesProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CartController extends Controller
{
   public function addToCart($id)
   {
      session()->push('in_cart', $id);

      //Выбор id секции и id товара
      $reg = '/\d+/';
      preg_match_all($reg, $id, $arr);

      $section_id = $arr[0][0];
      $product_id = $arr[0][1];

      //Выбор названия таблицы для запроса в базу данных
      if ($section_id == 1) {
         $product_price = ConsolesProduct::where('product_id', '=', $product_id)->value('price');
      }
      if ($section_id == 2) {
         $product_price = GamesProduct::where('product_id', '=', $product_id)->value('price');
      }

      $total_price = session()->get('total_price', 0) + $product_price;

      session()->put('total_price', $total_price);

      //Log::info(session()->get('in_cart'));
   }

   public function showCart()
   {

      //Общее количество
      $total_count = count(session('in_cart')->get());

      //Общая цена
      $total_price = session('total_price')->get();

      //Товары в корзине
      $ids = session('in_cart')->get();
      foreach ($ids as $id) {

         //Выбор id секции и id товара
         $reg = '/\d+/';
         preg_match_all($reg, $id, $arr);

         $section_id = $arr[0][0];
         $product_id = $arr[0][1];

         //Выбор названия таблицы для запроса в базу данных
         if ($section_id == 1) {
            $cart_product = ConsolesProduct::where('product_id', '=', $product_id)->get();
         }
         if ($section_id == 2) {
            $cart_product = GamesProduct::where('product_id', '=', $product_id)->get();
         }

         $cart_products=array_push($cart_product);

      }


      $res=['total_count'=>$total_count,'total_price'=>$total_price,'cart_products'=>$cart_products];

      $res=json_encode($res);

      return $res;

   }
}
