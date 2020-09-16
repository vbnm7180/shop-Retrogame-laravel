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
      

      //Выбор id секции и id товара
      $reg = '/\d+/';
      preg_match_all($reg, $id, $arr);

      $section_id = $arr[0][0];
      $product_id = $arr[0][1];

      //Выбор названия таблицы для запроса в базу данных
      if ($section_id == 1) {
         $product = ConsolesProduct::where('product_id', '=', $product_id)->get();
         session()->push('in_cart', ['id'=>$id,'image_folder'=>'consoles','image'=>$product['image'],'name'=>$product['name'],'price'=>$product['price']]);
      }
      if ($section_id == 2) {
         $product = GamesProduct::where('product_id', '=', $product_id)->value('price');
         session()->push('in_cart', ['id'=>$id,'image_folder'=>'games','image'=>$product['image'],'name'=>$product['name'],'price'=>$product['price']]);
      }

      $total_price = session()->get('total_price', 0) + $product['price'];

      session()->put('total_price', $total_price);

      //Log::info(session()->get('in_cart'));
   }

   public function deleteFromCart($id)
   {
      $session_array = session()->get('in_cart');
      if (in_array($id, $session_array)) {

         //Поиск индекса товара
         $index = array_search($id, $session_array);
         //Удаление товара

         unset($session_array[$index]);
         //Переиндексирование
         $session_array = array_values($session_array);
         session()->put('in_cart', $session_array);


      }
   }

   public function showCart()
   {

      //Общее количество
      $total_count = count(session()->get('in_cart', []));

      //Общая цена
      $total_price = session()->get('total_price', 0);



      //Товары в корзине
      $cart_products = $cart_products ?? [];

      if ($total_count != 0) {
         $ids = session()->get('in_cart', []);
         foreach ($ids as $id) {

            //Выбор id секции и id товара
            $reg = '/\d+/';
            preg_match_all($reg, $id, $arr);

            $section_id = $arr[0][0];
            $product_id = $arr[0][1];

            //Выбор названия таблицы для запроса в базу данных
            if ($section_id == 1) {
               $cart_product = ConsolesProduct::where('product_id', '=', $product_id)->get();
               $image_path = 'consoles';
            }
            if ($section_id == 2) {
               $cart_product = GamesProduct::where('product_id', '=', $product_id)->get();
               $image_path = 'games';
            }

            //Log::info($cart_product);
            $cart_products[] = $cart_product->toArray();
         }
         //Log::info($cart_products);

      }


      $res = ['total_count' => $total_count, 'total_price' => $total_price, 'image_path' => $image_path, 'cart_products' => $cart_products];

      //$res = json_encode($res);

      Log::info($res);

      //view('cart')->render();

      return view('cart')->with('res', $res);
   }
}
