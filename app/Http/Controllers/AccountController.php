<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use App\Models\Order;
use App\Models\GamesProduct;
use App\Models\ConsolesProduct;

class AccountController extends Controller
{
    public function showAccount(){

        $orders=Order::where('email','=',Auth::user()->email)->get()->toArray();

        foreach ($orders as &$order){
            //Преобразование перенчня товаров в массив
            $ids = explode(', ', $order['products']);
            foreach ($ids as $count=>$id){
                	//Выбор id секции и id товара
					$reg = '/\d+/';
					preg_match_all($reg, $id, $arr);

					$section_id = $arr[0][0];
					$product_id = $arr[0][1];

					//Выбор таблицы для запроса к бд и секции товара
					if ($section_id == 1) {
                        $product = ConsolesProduct::where('product_id', '=', $product_id)->get()->toArray();
                        $products_info['product_name']=$product[0]['name'];
                        $products_info['price']=$product[0]['price'];
                        $products_info['section_name']='Игровая консоль';

					}
					if ($section_id == 2) {
                        $product = GamesProduct::where('product_id', '=', $product_id)->get()->toArray();
                        $products_info['product_name']=$product[0]['name'];
                        $products_info['price']=$product[0]['price'];
                        $products_info['section_name']='Игра';
                    }
                    $order['products_info'][$count]=$products_info;
                    
                    


            }
        }

        unset($order);
        //Log::info($orders);

        $res=[
            'city'=>Auth::user()->city,
            'street'=>Auth::user()->street,
            'postcode'=>Auth::user()->postcode,
            'name'=>Auth::user()->name,
            'phone'=>Auth::user()->phone,
            'email'=>Auth::user()->email,
            'orders'=>$orders
         ];

         Log::info($res);
         return view('account')->with('res',$res);
    }

    public function updateAccount(Request $input){
        //Log::info($input->all());
       User::where('id','=',Auth::user()->id)->update($input->all());

    }

    public function exitAccount(){
        Auth::logout();
        
    }
}
