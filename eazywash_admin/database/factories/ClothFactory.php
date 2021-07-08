<?php

namespace Database\Factories;

use App\Models\Cloth;
use Illuminate\Database\Eloquent\Factories\Factory;

class ClothFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Cloth::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'rate' => rand(9, 49)
        ];
    }
}
