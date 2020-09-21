<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;
use App\Models\Order;


class OrdersController extends Controller
{
    //Оформление заказа
    public function makeOrder(Request $input){

        //Вычисление номера для следующего заказа
        $max_order = Order::max('order_number');
        $order_number=$max_order+1;
        
        //Создание строки из id товаров в корзине
        $products=session()->get('in_cart');
        foreach($products as $product){
            $products_ids[]=$product['id'];
        }
        $products=implode(', ', $products_ids);

        //Запись текущей даты
        $date=Carbon::now()->format('Y-m-d');

        //Отправка свдений о заказе в базу данных
        Order::create([
            'order_number'=>$order_number,
            'products'=>$products,
            'name'=>$input->input('name'),
            'email'=>$input->input('email'),
            'phone'=>$input->input('phone'),
            'city'=>$input->input('city'),
            'street'=>$input->input('street'),
            'postcode'=>$input->input('postcode'),
            'total_price'=>session()->get('total_price'),
            'order_date'=>$date,

        ]);
    }
}
