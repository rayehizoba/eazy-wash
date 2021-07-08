<?php

namespace Database\Seeders;

use App\Models\Offer;
use Illuminate\Database\Seeder;

class OfferSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $offers = [
            [
                'name' => 'Flat 25% off on Your First Order!',
                'about' => 'Valid for all new customers this month!',
            ],
            [
                'name' => 'New Customer? Get your first wash for free!',
                'about' => 'Are you a new customer? Order now & get your first discount with us today!',
            ]
        ];

        foreach($offers as $offer) {
            Offer::factory()->create([
                'name' => $offer['name'],
                'about' => $offer['about'],
            ]);
        }
    }
}
