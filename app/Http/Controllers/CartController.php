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
      //
      //Добавление в массив
      session()->get('in_cart', []);

      //Log::info($id);

      //Выбор id секции и id товара
      $reg = '/\d+/';
      preg_match_all($reg, $id, $arr);

      $section_id = $arr[0][0];
      $product_id = $arr[0][1];

      //Выбор названия таблицы для запроса в базу данных
      if ($section_id == 1) {
         $product = ConsolesProduct::where('product_id', '=', $product_id)->get()->toArray();
         session()->push('in_cart', ['id' => $id, 'image_folder' => 'consoles', 'image' => $product[0]['image'], 'name' => $product[0]['name'], 'price' => $product[0]['price']]);
      }
      if ($section_id == 2) {
         $product = GamesProduct::where('product_id', '=', $product_id)->get()->toArray();
         session()->push('in_cart', ['id' => $id, 'image_folder' => 'games', 'image' => $product[0]['image'], 'name' => $product[0]['name'], 'price' => $product[0]['price']]);
      }

      $total_price = session()->get('total_price', 0) + $product[0]['price'];

      session()->put('total_price', $total_price);

      //Log::info(session()->get('in_cart'));
   }

   public function deleteFromCart($id)
   {
      $session_array = session()->get('in_cart');

      foreach ($session_array as $index => $product) {
         if ($product['id'] == $id) {
            unset($session_array[$index]);
            //Переиндексирование
            $session_array = array_values($session_array);
            session()->put('in_cart', $session_array);
            //Log::info($session_array);
            $total_price = session()->get('total_price', 0) - $product['price'];
            session()->put('total_price', $total_price);
         }
      }

      $res=['total_count'=>count(session()->get('in_cart')),'total_price'=>$total_price];

      $res=json_encode($res);

      return $res;
      
   }

   public function showCart()
   {
   }
}
