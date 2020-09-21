<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;


class LoginController extends Controller
{
    //Аутентификация пользователя
    public function login(Request $input){

        //Сообщения об ошибках при верификации введенных данных
        $messages=[
            'required'=>'Это поле не заполнено',
            'email'=>'Введите действительный Email',
            'exists'=>'Неверный Email',
        ];

        //Поиск email в базе данных
        $validator=Validator::make($input->all(),[
            'email'=>'required|email|exists:users,email',
            'password'=>'required'
        ], $messages);

        //Вывод сообщения, если email не найден
        if($validator->fails()){
            return response()->json($validator->errors(),422);
        }

        //Попытка аутентификации пользователя
        if(!Auth::attempt($input->all())){
            //Вывод сообщения, если пароль не верен
            return response()->json(['password'=>'Неверный пароль'],422);
        }
        else{
            //Отправка ответа со статусом 200, если аутентификация успешна
            return response()->make('',200);
        }

    }
}
