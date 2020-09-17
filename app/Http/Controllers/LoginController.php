<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class LoginController extends Controller
{
    public function login(Request $request){
        $request->validate([
            'login'=>'required|email|exists:users,login',
            'password'=>'required'
        ]);
            header("Location:http://retrogame3");
            //header('responseJSON:{"error":1}',true,422);
            /*
        $hash_password=User::where('login','=',$request->input('login'))->get()->value('password');

        if(!Hash::check($request->input('password'),$hash_password)){


        }

        else{
        return redirect('/');
    
        }
        */

    }
}
