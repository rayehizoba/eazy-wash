<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [
                'name' => 'Popular',
                'emoji' => '🔥',
                'color' => 'bg-red-100',
            ],
            [
                'name' => 'Business Clothes',
                'emoji' => '👔',
                'color' => 'bg-blue-100',
            ],
            [
                'name' => 'Outerwear',
                'emoji' => '🧥',
                'color' => 'bg-purple-100',
            ],
            [
                'name' => 'Casual Wear',
                'emoji' => '👕',
                'color' => 'bg-green-100',
            ],
            [
                'name' => 'Napkins & Quilts',
                'emoji' => '🛏️',
                'color' => 'bg-yellow-100',
            ],
            [
                'name' => 'Footwear',
                'emoji' => '👟',
                'color' => 'bg-indigo-100',
            ],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
