<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    // database/migrations/..._add_is_compulsory_to_class_subjects_table.php
    public function up(): void
    {
        Schema::table('class_subjects', function (Blueprint $table) {
            $table->boolean('is_compulsory')->default(true)->after('subject_id');
        });
    }

    public function down(): void
    {
        Schema::table('class_subjects', function (Blueprint $table) {
            $table->dropColumn('is_compulsory');
        });
    }
};
