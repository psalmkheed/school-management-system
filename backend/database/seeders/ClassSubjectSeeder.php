<?php

namespace Database\Seeders;

use App\Models\ClassSubject;
use App\Models\Subject;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ClassSubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $nurseryClassIds = [1, 2, 3, 4];   // BUSY, PRE-NURSERY, NURSERY 1, NURSERY 2
        $primaryClassIds = [5, 6, 7, 8, 9]; // YEAR 1-5
        $jssClassIds = [10, 11, 12];         // JSS1-3
        $ssClassIds = [13, 14, 15];          // SS1-3

        $scienceDeptId = 1;
        $artsDeptId = 2;
        $commercialDeptId = 3;

        // Nursery & Primary — no department
        $this->assignSubjects($nurseryClassIds, null, Subject::whereIn('subject_category', ['General', 'Nursery'])->pluck('id'));
        $this->assignSubjects($primaryClassIds, null, Subject::whereIn('subject_category', ['General', 'Primary'])->pluck('id'));

        // JSS — no department
        $this->assignSubjects($jssClassIds, null, Subject::whereIn('subject_category', ['General', 'Junior Secondary'])->pluck('id'));

        // SS — subjects shared across all three departments (Mathematics, English, CRS, IRS, etc.)
        $ssSharedIds = Subject::where('subject_category', 'General')->pluck('id');
        foreach ([$scienceDeptId, $artsDeptId, $commercialDeptId] as $deptId) {
            $this->assignSubjects($ssClassIds, $deptId, $ssSharedIds);
        }

        // SS — Science-specific (compulsory)
        $scienceIds = Subject::whereIn('subject_name', ['Physics', 'Chemistry', 'Biology'])->pluck('id');
        $this->assignSubjects($ssClassIds, $scienceDeptId, $scienceIds);

        // SS — Further Mathematics: optional, Science only
        $furtherMathIds = Subject::where('subject_name', 'Further Mathematics')->pluck('id');
        $this->assignSubjects($ssClassIds, $scienceDeptId, $furtherMathIds, false);

        // SS — Arts-specific (compulsory)
        $artsIds = Subject::whereIn('subject_name', ['Government', 'Fine Arts', 'Music', 'Cultural and Creative Arts'])->pluck('id');
        $this->assignSubjects($ssClassIds, $artsDeptId, $artsIds);

        // SS — Commercial-specific (compulsory)
        $commercialIds = Subject::whereIn('subject_name', ['Commerce', 'Economics', 'Financial Accounting', 'Book Keeping', 'Office Practice', 'Marketing', 'Business Studies'])->pluck('id');
        $this->assignSubjects($ssClassIds, $commercialDeptId, $commercialIds);
    }

    private function assignSubjects(array $classIds, ?int $departmentId, object $subjectIds, bool $compulsory = true): void
    {
        foreach ($classIds as $classId) {
            foreach ($subjectIds as $subjectId) {
                ClassSubject::firstOrCreate(
                    [
                        'school_class_id' => $classId,
                        'department_id' => $departmentId,
                        'subject_id' => $subjectId,
                    ],
                    [
                        'is_compulsory' => $compulsory,
                    ]
                );
            }
        }
    }
}