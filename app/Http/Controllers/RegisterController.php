<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use App\Models\User;


class RegisterController extends Controller
{
    
    public function register(Request $input){

        //Сообщения об ошибках при верификации введенных данных
        $messages=[
            'required'=>'Это поле не заполнено',
            'email'=>'Введите действительный Email',
            'unique'=>'Такой Email уже зарегистрирован',
            'same'=>'Пароли не совпадают'
        ];

        //Проверка правильности ввода полей
        $validator=Validator::make($input->all(),[
            'name'=>'required',
            'email'=>'required|email|unique:users,email',
            'password'=>'required',
            'password_rep'=>'required|same:password'
        ], $messages);

        //Вывод сообщения об ошибках
        if($validator->fails()){
            Log::info($validator->errors());
            return response()->json($validator->errors(),422);
        }

        //Если проверка пройдена, хешируем пароль
        $hash_password=Hash::make($input->get('password'));

        //Создаем запись о пользователе в базе данных
        User::create([
            'name'=>$input->get('name'),
            'email'=>$input->get('email'),
            'password'=>$hash_password,
        ]);

        return response()->make('',200);

    } 
}
