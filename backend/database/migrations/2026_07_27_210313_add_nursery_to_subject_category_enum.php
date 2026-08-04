<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement("ALTER TABLE subjects MODIFY COLUMN subject_category ENUM('General','Nursery','Primary','Junior Secondary','Senior Secondary') DEFAULT 'General'");
    }

    public function down(): void
    {
        DB::statement("ALTER TABLE subjects MODIFY COLUMN subject_category ENUM('General','Primary','Junior Secondary','Senior Secondary') DEFAULT 'General'");
    }

    /**
     * Reverse the migrations.
     */
    
};
