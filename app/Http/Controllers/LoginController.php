<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request){
        $request->validate([
            'login'=>'required|email|exists:users,login',
            'password'=>'required|password'
        ]);

        return redirect('/');

    }
}
