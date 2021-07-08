<?php

namespace Database\Seeders;

use App\Models\Cloth;
use Illuminate\Database\Seeder;

class ClothSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $clothes = [
            // Business Clothes
            'Evening Dress',
            'Tuxedo',

            // Outerwear
            'Jacket Down',
            'Leather Jacket',
            'Rain Coat',

            // Casual Wear
            'Jeans',
            'Kids Dress',
            'Skirt',
            'Shorts',
            'T-shirt',

            // Footwear
            'Sneakers'
        ];

        foreach($clothes as $cloth) {
            Cloth::factory()->create([
                'name' => $cloth,
            ]);
        }
    }
}
