<?php

namespace App\Http\Controllers;

use App\Models\Cloth;
use Illuminate\Http\Request;

class ClothesController extends Controller
{
    public function index(Request $request)
    {
        return Cloth::all();
    }
}
