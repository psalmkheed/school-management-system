<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SchoolClassSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $classes = [
            'BUSY',
            'PRE-NURSERY',
            'NURSERY 1',
            'NURSERY 2',
            'YEAR 1',
            'YEAR 2',
            'YEAR 3',
            'YEAR 4',
            'YEAR 5',
            'JSS1',
            'JSS2',
            'JSS3',
            'SS1',
            'SS2',
            'SS3'
        ];


        $startId = 200;
        foreach ($classes as $class) {

            DB::table('school_classes')->insert([
                'class_name' => $class,
                'class_id' => $startId,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $startId++;
        }
    }
}
