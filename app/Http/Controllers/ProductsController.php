<?php

namespace App\Http\Controllers;

use App\Models\GamesProduct;
use App\Models\ConsolesProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProductsController extends Controller
{
    //Показать карточки товаров с играми
    public function showGames($id)
    {
        $reg = '/-(\d+)/';
        preg_match($reg, $id, $arr);
        $categ_id = $arr[1];

        //Выбор информации для карточек товаров из базы данных
        $res = GamesProduct::where('category_id', '=', $categ_id)->get();

        foreach ($res as $product) {

            $check = $product['section_id'] . '-' . $product['product_id'];

            $product['cart'] = 0;

            foreach (session()->get('in_cart', []) as $cart_item) {
                if (in_array($check, $cart_item)) {
                    $product['cart'] = 1;
                } else {
                    $product['cart'] = 0;
                }
            }
        }

        Log::info($res);

        $res = json_encode($res);


        return $res;
    }

    //Показать карточки товаров с приставками
    public function showConsoles($id)
    {
        $reg = '/-(\d+)/';
        preg_match($reg, $id, $arr);
        $categ_id = $arr[1];

        //Выбор информации для карточек товаров из базы данных
        $res = ConsolesProduct::join('categories', 'consoles_products.category_id', '=', 'categories.category_id')->where('categories.category_id', '=', $categ_id)->get();

        $res = json_encode($res);



        //Log::info($res);

        return $res;
    }
}
