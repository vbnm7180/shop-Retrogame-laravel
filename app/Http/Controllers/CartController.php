<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use App\Models\ConsolesProduct;
use App\Models\GamesProduct;

class CartController extends Controller
{
   //Добавление товара в корзину
   public function addToCart($id)
   {

      //Добавление в массив
      //session()->get('in_cart', []);

      //Выбор id секции и id товара
      $reg = '/\d+/';
      preg_match_all($reg, $id, $arr);

      $section_id = $arr[0][0];
      $product_id = $arr[0][1];

      //Выбор названия таблицы для запроса в базу данных
      if ($section_id == 1) {
         //Выбор информации о товаре и занесение ее в переменную сессии
         $product = ConsolesProduct::where('product_id', '=', $product_id)->get()->toArray();
         session()->push('in_cart', ['id' => $id, 'image_folder' => 'consoles', 'image' => $product[0]['image'], 'name' => $product[0]['name'], 'price' => $product[0]['price']]);
      }
      if ($section_id == 2) {
         //Выбор информации о товаре и занесение ее в переменную сессии
         $product = GamesProduct::where('product_id', '=', $product_id)->get()->toArray();
         session()->push('in_cart', ['id' => $id, 'image_folder' => 'games', 'image' => $product[0]['image'], 'name' => $product[0]['name'], 'price' => $product[0]['price']]);
      }

      //Вычисление общей цены товаров в корзине
      $total_price = session()->get('total_price', 0) + $product[0]['price'];

      //Обновление переменной сессии
      session()->put('total_price', $total_price);

   }

   //Удаление товара из корзины
   public function deleteFromCart($id)
   {
      //Зписываем массив с товарами из сессии в переменную
      $session_array = session()->get('in_cart');

      //Для каждого товара
      foreach ($session_array as $index => $product) {
         if ($product['id'] == $id) {
            //Удаляем товар из массива корзины 
            unset($session_array[$index]);
            //Переиндексирование
            $session_array = array_values($session_array);
            //Вводим измененный массив в сессию
            session()->put('in_cart', $session_array);
            //Вычисляем цену товаров в корзине
            $total_price = session()->get('total_price', 0) - $product['price'];
            //Обновляем переменную сессии
            session()->put('total_price', $total_price);
         }
      }

      //Возращение количества товаров и общей цены для их изменения на странице
      $res=['total_count'=>count(session()->get('in_cart')),'total_price'=>$total_price];

      $res=json_encode($res);

      return $res;
      
   }

   //Открытие корзины
   public function showCart()
   {
      //Проверка аутентификации и заполнение формы в корзине данными
      if(Auth::check()){
         $res=[
            'city'=>Auth::user()->city,
            'street'=>Auth::user()->street,
            'postcode'=>Auth::user()->postcode,
            'name'=>Auth::user()->name,
            'phone'=>Auth::user()->phone,
            'email'=>Auth::user()->email,
         ];
         return view('cart')->with('res',$res);

      }
      else{
         $res=[
            'city'=>'',
            'street'=>'',
            'postcode'=>'',
            'name'=>'',
            'phone'=>'',
            'email'=>'',
         ];
         return view('cart')->with('res',$res);

      }
   }
}
