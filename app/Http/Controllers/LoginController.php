<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;


class LoginController extends Controller
{
    public function login(Request $input){

        
        $messages=[
            'required'=>'Это поле не заполнено',
            'email'=>'Введите действительный Email',
            'exists'=>'Неверный Email',
        ];

        $validator=Validator::make($input->all(),[
            'email'=>'required|email|exists:users,email',
            'password'=>'required'
        ], $messages);

        if($validator->fails()){
            Log::info($validator->errors());
            return response()->json($validator->errors(),422);
        }

        if(!Auth::attempt($input->all())){
            return response()->json(['responseJSON'=>[
                'password'=>'Неверный пароль'
            ]],422);
        }
        else{
            return response()->make('',200);
        }

        $hash_password=Hash::make($input->get('password'));

        User::create([
            'name'=>$input->get('name'),
            'email'=>$input->get('email'),
            'password'=>$hash_password,
        ]);

        return response()->make('',200);

    }
}
