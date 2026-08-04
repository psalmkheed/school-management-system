<?php

namespace Database\Seeders;

use App\Models\Subject;
use Illuminate\Database\Seeder;

class SubjectSeeder extends Seeder
{
    public function run(): void
    {
        $subjects = [

            // ================= GENERAL =================
            ['subject_name' => 'Mathematics', 'subject_code' => 'MTH'],
            ['subject_name' => 'English Language', 'subject_code' => 'ENG'],
            ['subject_name' => 'Creative Arts', 'subject_code' => 'CRA'],
            ['subject_name' => 'Physical and Health Education', 'subject_code' => 'PHE'],
            ['subject_name' => 'Christian Religious Studies', 'subject_code' => 'CRS'],
            ['subject_name' => 'Islamic Religious Studies', 'subject_code' => 'IRS'],
            ['subject_name' => 'French', 'subject_code' => 'FRE'],
            ['subject_name' => 'Fine Arts', 'subject_code' => 'ART'],
            ['subject_name' => 'Music', 'subject_code' => 'MUS'],
            ['subject_name' => 'Computer Studies', 'subject_code' => 'CMP'],
            ['subject_name' => 'Civic Education', 'subject_code' => 'CIV'],
            ['subject_name' => 'Agricultural Science', 'subject_code' => 'AGR'],

            // ================= NURSERY =================
            ['subject_name' => 'Phonics', 'subject_code' => 'PHN'],
            ['subject_name' => 'Rhymes', 'subject_code' => 'RHY'],
            ['subject_name' => 'Handwriting', 'subject_code' => 'HWR'],
            ['subject_name' => 'Numeracy', 'subject_code' => 'NUM'],
            ['subject_name' => 'Literacy', 'subject_code' => 'LITR'],

            // ================= PRIMARY =================
            ['subject_name' => 'Basic Science', 'subject_code' => 'BSC'],
            ['subject_name' => 'Basic Technology', 'subject_code' => 'BTE'],
            ['subject_name' => 'Social Studies', 'subject_code' => 'SOS'],
            ['subject_name' => 'Verbal Reasoning', 'subject_code' => 'VR'],
            ['subject_name' => 'Quantitative Reasoning', 'subject_code' => 'QR'],
            ['subject_name' => 'Moral Instruction', 'subject_code' => 'MOR'],

            // ================= JUNIOR =================
            ['subject_name' => 'Business Studies', 'subject_code' => 'BST'],
            ['subject_name' => 'Home Economics', 'subject_code' => 'HME'],
            ['subject_name' => 'Cultural and Creative Arts', 'subject_code' => 'CCA'],

            // ================= SENIOR =================
            ['subject_name' => 'Further Mathematics', 'subject_code' => 'FMT'],
            ['subject_name' => 'Physics', 'subject_code' => 'PHY'],
            ['subject_name' => 'Chemistry', 'subject_code' => 'CHM'],
            ['subject_name' => 'Biology', 'subject_code' => 'BIO'],
            ['subject_name' => 'Economics', 'subject_code' => 'ECO'],
            ['subject_name' => 'Government', 'subject_code' => 'GOV'],
            ['subject_name' => 'Commerce', 'subject_code' => 'COM'],
            ['subject_name' => 'Book Keeping', 'subject_code' => 'BKG'],
            ['subject_name' => 'Financial Accounting', 'subject_code' => 'ACC'],
            ['subject_name' => 'Office Practice', 'subject_code' => 'OFP'],
            ['subject_name' => 'Marketing', 'subject_code' => 'MKT'],
            ['subject_name' => 'Technical Drawing', 'subject_code' => 'TDR'],
            ['subject_name' => 'Woodwork', 'subject_code' => 'WDW'],
            ['subject_name' => 'Metalwork', 'subject_code' => 'MTW'],
            ['subject_name' => 'Auto Mechanics', 'subject_code' => 'ATM'],
            ['subject_name' => 'Building Construction', 'subject_code' => 'BDC'],
            ['subject_name' => 'Electrical Installation and Maintenance', 'subject_code' => 'EIM'],
            ['subject_name' => 'Store Management', 'subject_code' => 'STM'],
            ['subject_name' => 'Food and Nutrition', 'subject_code' => 'FON'],
            ['subject_name' => 'Clothing and Textiles', 'subject_code' => 'CLT'],

            // Optional
            ['subject_name' => 'History', 'subject_code' => 'HIS'],
            ['subject_name' => 'Geography', 'subject_code' => 'GEO'],
            ['subject_name' => 'Data Processing', 'subject_code' => 'DTP'],
            ['subject_name' => 'Information and Communication Technology', 'subject_code' => 'ICT'],
            ['subject_name' => 'Security Education', 'subject_code' => 'SEC'],
            ['subject_name' => 'Animal Husbandry', 'subject_code' => 'ANH'],
            ['subject_name' => 'Health Education', 'subject_code' => 'HED'],
            ['subject_name' => 'Literature in English', 'subject_code' => 'LIE'],
            ['subject_name' => 'Yoruba', 'subject_code' => 'YOR'],
            ['subject_name' => 'Igbo', 'subject_code' => 'IGB'],
            ['subject_name' => 'Hausa', 'subject_code' => 'HAU'],
            ['subject_name' => 'Arabic', 'subject_code' => 'ARB'],
        ];

        foreach ($subjects as $subject) {
            Subject::updateOrCreate(
                ['subject_name' => $subject['subject_name']],
                [
                    'subject_code' => $subject['subject_code'],
                ]
            );
        }
    }
}
