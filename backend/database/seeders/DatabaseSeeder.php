<?php

namespace Database\Seeders;

use App\Models\User;
use Database\Seeders\AcademicSessionSeeder;
use Database\Seeders\DepartmentSeeder;
use Database\Seeders\SchoolClassSeeder;
use Database\Seeders\StateSeeder;
use Database\Seeders\SubjectSeeder;
use Database\Seeders\TermSeeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Administrator',
            'email' => 'test@example.com',
            'password'=>Hash::make('12345678')
        ]);

        $this->call([
            TermSeeder::class,
            StateSeeder::class,
            DepartmentSeeder::class,
            SchoolClassSeeder::class,
            SubjectSeeder::class,
            SubjectCategorySeeder::class,
            ClassSubjectSeeder::class,
            AcademicSessionSeeder::class,
        ]);

    }
}
