<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as Authenticatable;

class User extends Authenticatable
{
    use HasFactory;

    protected $table='users';
    protected $primaryKey='user_id';
    protected $fillable = ['name','email','password','phone','city','street','postcode'];
    
    public $timestamps=false;


}