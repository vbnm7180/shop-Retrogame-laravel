<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AccountController extends Controller
{
    public function showAccount(){
        $res=[
            'city'=>Auth::user()->city,
            'street'=>Auth::user()->city,
            'postcode'=>Auth::user()->postcode,
            'name'=>Auth::user()->name,
            'phone'=>Auth::user()->phone,
            'email'=>Auth::user()->email,
         ];
         return view('account')->with('res',$res);
    }
    public function exitAccount(){
        Auth::logout();
        
    }
}
