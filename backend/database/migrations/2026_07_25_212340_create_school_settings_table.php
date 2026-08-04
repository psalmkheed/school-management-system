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
        Schema::create('school_settings', function (Blueprint $table) {
            $table->id();

            $table->string('school_name');
            $table->string('school_motto')->nullable();

            $table->string('phone')->nullable();
            $table->string('alternate_phone')->nullable();

            $table->string('email')->nullable();
            $table->string('website')->nullable();

            $table->text('address')->nullable();

            $table->foreignId('current_academic_session_id')
                ->nullable()
                ->constrained('academic_sessions')
                ->nullOnDelete();

            $table->foreignId('current_term_id')
                ->nullable()
                ->constrained('terms')
                ->nullOnDelete();

            $table->string('principal_name')->nullable();
            $table->string('vice_principal_name')->nullable();

            $table->string('school_logo')->nullable();
            $table->string('school_stamp')->nullable();

            $table->string('result_signature')->nullable();


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('school_settings');
    }
};
