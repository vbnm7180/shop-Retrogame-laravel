<?php

namespace App\Http\Controllers;

use App\Models\GamesProduct;
use Illuminate\Http\Request;



class ProductsController extends Controller
{
    public function showGames($categ)
    {
        $reg = '/-(\d+)/';
        preg_match($reg, $categ, $arr);
        $categ_id = $arr[1];

        $res=GamesProduct::select('SELECT * FROM `games_products` WHERE `category_id`=' . $categ_id . '');

        return view('main',$res);

    }
}
