<?php

namespace Database\Seeders;

use App\Models\Term;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TermSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Term::insert([
            ['term_name' => 'First Term'],
            ['term_name' => 'Second Term'],
            ['term_name' => 'Third Term'],
        ]);
    }
}
