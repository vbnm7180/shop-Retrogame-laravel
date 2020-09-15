<?php

namespace App\Http\Controllers;

use App\Models\GamesProduct;
use App\Models\ConsolesProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

    /**
     * Хранить нового пользователя.
     *
     * @param string $id
     */


class ProductsController extends Controller
{
    public function showGames($id)
    {
        $reg = '/-(\d+)/';
        preg_match($reg, $id, $arr);
        $categ_id = $arr[1];

        $res=GamesProduct::where('category_id','=', $categ_id)->get();

        $res=json_encode($res);

        //Log::info('req',$res);

        return $res;

    }

    public function showConsoles($id){
        $reg = '/-(\d+)/';
        preg_match($reg, $id, $arr);
        $categ_id = $arr[1];

        $res=ConsolesProduct::where('category_id','=', $categ_id)->get();

        $res=json_encode($res);

        //Log::info('req',$res);

        return $res;

    }
}
