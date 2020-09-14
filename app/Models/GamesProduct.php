<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GamesProduct extends Model
{
    use HasFactory;

    protected $table='games_products';
    protected $primaryKey='product_id';
    
    public $timestamps=false;


}
