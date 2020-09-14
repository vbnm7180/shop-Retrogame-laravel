<?php

namespace App\Http\Controllers;

use App\Models\GamesProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

    /**
     * Хранить нового пользователя.
     *
     * @param string $categ
     */


class ProductsController extends Controller
{
    public function showGames($categ)
    {
        $reg = '/-(\d+)/';
        preg_match($reg, $categ, $arr);
        $categ_id = $arr[1];

        $res=GamesProduct::where('category_id','=', $categ_id)->get();

        //$res=(array)$res;

        //Log::info('req',$res);

        return redirect('main')->with('res',$res);

    }
}
