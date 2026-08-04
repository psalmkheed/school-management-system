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
        Schema::create('students', function (Blueprint $table) {
            $table->id();

            // student informations
            $table->string('student_id')->unique();
            $table->string('surname');
            $table->string('first_name');
            $table->string('other_name')->nullable();
            $table->enum('gender',['Male', 'Female']) ;
            $table->date('date_of_birth');
            $table->string('nationality')->default('Nigeria');
            $table->string('state_of_origin');
            $table->text('address');
            // student passport
            $table->string('photo')->nullable();

            $table->foreignId('parent_guardian_id')
                ->nullable()
                ->constrained()
                ->nullOnDelete();
            // student status
            $table->enum('status', ['Active', 'Inactive', 'Graduated', 'Suspended'])->default('Active');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
