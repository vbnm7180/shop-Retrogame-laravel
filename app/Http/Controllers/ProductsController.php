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
        $res=GamesProduct::where('category_id','=', $categ_id)->get();

        $res=json_encode($res);

        return $res;

    }

    //Показать карточки товаров с приставками
    public function showConsoles($id){
        $reg = '/-(\d+)/';
        preg_match($reg, $id, $arr);
        $categ_id = $arr[1];

        //Выбор информации для карточек товаров из базы данных
        $res=ConsolesProduct::where('category_id','=', $categ_id)->get();

        $res=json_encode($res);

        return $res;

    }
}
