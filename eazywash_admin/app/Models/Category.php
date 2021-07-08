<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'color',
        'emoji',
    ];

    public function clothes()
    {
        return $this->belongsToMany(Cloth::class);
    }

    public function cloths()
    {
        return $this->belongsToMany(Cloth::class);
    }
}
