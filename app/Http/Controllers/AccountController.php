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
    //Открытие личного кабинета
    public function showAccount(){

        //Выбор заказов пользователя из базы данных
        $orders=Order::where('email','=',Auth::user()->email)->get()->toArray();

        //Для каждого заказа
        foreach ($orders as &$order){

            //Преобразование перечня товаров в заказе в массив
            $ids = explode(', ', $order['products']);

            foreach ($ids as $count=>$id){

                	//Выбор id секции и id товара
					$reg = '/\d+/';
					preg_match_all($reg, $id, $arr);

					$section_id = $arr[0][0];
					$product_id = $arr[0][1];

					//Выбор информации о товаре из соответсвующей таблицы
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

                    //Занесени информации о товаре в массив
                    $order['products_info'][$count]=$products_info;
            }
        }

        unset($order);

        //Результирующий массив
        $res=[
            'city'=>Auth::user()->city,
            'street'=>Auth::user()->street,
            'postcode'=>Auth::user()->postcode,
            'name'=>Auth::user()->name,
            'phone'=>Auth::user()->phone,
            'email'=>Auth::user()->email,
            'orders'=>$orders
         ];

         return view('account')->with('res',$res);
    }

    //Обновить информацию в личном кабинете
    public function updateAccount(Request $input){
       User::where('id','=',Auth::user()->id)->update($input->all());
    }

    //Выйти из личного кабинета
    public function exitAccount(){
        Auth::logout();
    }
}
