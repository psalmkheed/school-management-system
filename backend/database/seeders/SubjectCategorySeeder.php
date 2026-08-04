<?php

namespace Database\Seeders;

use App\Models\Subject;
use Illuminate\Database\Seeder;

class SubjectCategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [

            'General' => [
                'Mathematics',
                'English Language',
                'Creative Arts',
                'Physical and Health Education',
                'Christian Religious Studies',
                'Islamic Religious Studies',
                'French',
                'Fine Arts',
                'Music',
                'Computer Studies',
                'Civic Education',
                'Agricultural Science',
            ],

            'Nursery' => [
                'Phonics',
                'Rhymes',
                'Handwriting',
                'Numeracy',
                'Literacy',
            ],

            'Primary' => [
                'Basic Science',
                'Basic Technology',
                'Social Studies',
                'Verbal Reasoning',
                'Quantitative Reasoning',
                'Moral Instruction',
            ],

            'Junior Secondary' => [
                'Business Studies',
                'Home Economics',
                'Cultural and Creative Arts',
            ],

            'Senior Secondary' => [
                'Further Mathematics',
                'Physics',
                'Chemistry',
                'Biology',
                'Economics',
                'Government',
                'Commerce',
                'Book Keeping',
                'Financial Accounting',
                'Office Practice',
                'Marketing',
                'Technical Drawing',
                'Woodwork',
                'Metalwork',
                'Auto Mechanics',
                'Building Construction',
                'Electrical Installation and Maintenance',
                'Store Management',
                'Food and Nutrition',
                'Clothing and Textiles',
                'History',
                'Geography',
                'Data Processing',
                'Information and Communication Technology',
                'Security Education',
                'Animal Husbandry',
                'Health Education',
                'Literature in English',
                'Yoruba',
                'Igbo',
                'Hausa',
                'Arabic',
            ],
        ];

        foreach ($categories as $category => $subjects) {
            Subject::whereIn('subject_name', $subjects)
                ->update([
                    'subject_category' => $category,
                ]);
        }
    }
}