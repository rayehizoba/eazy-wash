<?php

namespace App\Http\Controllers;

use App\Models\Offer;
use Illuminate\Http\Request;

class OffersController extends Controller
{
    public function index(Request $request)
    {
        return Offer::all();
    }
}
