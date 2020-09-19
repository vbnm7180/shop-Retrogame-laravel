<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $table='orders';
    protected $primaryKey='id';
    
    public $timestamps=false;
    protected $fillable = [
        'order_number','products','name','email','phone','city','street','postcode','total_price','order_date'
    ];

}
