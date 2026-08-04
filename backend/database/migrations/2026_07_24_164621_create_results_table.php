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
        Schema::create('results', function (Blueprint $table) {
            $table->id();

            $table->foreignId('student_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->foreignId('subject_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->foreignId('academic_session_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->foreignId('term_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->decimal('first_ca', 5, 2)->default(0);

            $table->decimal('second_ca', 5, 2)->default(0);

            $table->decimal('exam_score', 5, 2)->default(0);

            $table->decimal('total', 5, 2)->default(0);

            $table->string('grade')->nullable();

            $table->string('remark')->nullable();
            $table->unique([
                'student_id',
                'subject_id',
                'academic_session_id',
                'term_id'
            ]);

            $table->string('class_position')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('results');
    }
};
