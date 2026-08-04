<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $departments = [
            ['department_name' => 'Science', 'department_code' => 'SCI'],
            ['department_name' => 'Arts', 'department_code' => 'ART'],
            ['department_name' => 'Commercial', 'department_code' => 'COM'],
        ];

        foreach ($departments as $dept) {
            DB::table('departments')->insert(array_merge($dept, [
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}
