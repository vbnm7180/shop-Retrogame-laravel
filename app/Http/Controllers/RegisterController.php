<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;


class RegisterController extends Controller
{
    
    public function register(Request $input){

        $messages=[
            'required'=>'Это поле не заполнено',
            'email'=>'Введите действительный Email',
            'unique'=>'Такой Email уже зарегистрирован',
            'same'=>'Пароли не совпадают'
        ];

        $validator=Validator::make($input->all(),[
            'name'=>'required',
            'email'=>'required|email|unique:users,email',
            'password'=>'required',
            'password_rep'=>'required|same:password'
        ], $messages);

        if($validator->fails()){
            Log::info($validator->errors());
            return response()->json($validator->errors(),422);
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
