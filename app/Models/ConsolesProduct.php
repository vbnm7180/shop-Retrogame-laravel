<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConsolesProduct extends Model
{
    use HasFactory;

    protected $table='consoles_products';
    protected $primaryKey='product_id';

    public $timestamps=false;
}
