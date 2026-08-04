<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AcademicSessionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('academic_sessions')->insert([
            ['academic_session_name' => '2025/2026', 'created_at' => now(), 'updated_at' => now()],
            ['academic_session_name' => '2026/2027', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
