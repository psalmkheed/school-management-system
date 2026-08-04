<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('enrollments', function (Blueprint $table) {
            $table->foreignId('term_id')->nullable()->after('academic_session_id')->constrained('terms');
            $table->string('status')->default('Active')->after('term_id');
            $table->date('admission_date')->nullable()->after('status');
        });
    }

    public function down(): void
    {
        Schema::table('enrollments', function (Blueprint $table) {
            $table->dropForeign(['term_id']);
            $table->dropColumn(['term_id', 'status', 'admission_date']);
        });
    }
};
