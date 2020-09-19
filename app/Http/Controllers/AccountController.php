<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use App\Models\Order;

class AccountController extends Controller
{
    public function showAccount(){

        $orders=Order::where('email','=',Auth::user()->email)->toArray();

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

    public function updateAccount(Request $input){
        Log::info($input->all());
       User::where('id','=',Auth::user()->id)->update($input->all());

    }

    public function exitAccount(){
        Auth::logout();
        
    }
}
