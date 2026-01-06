import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface StudentMarks {
  rollNo: number;
  name: string;
  marks: number | null;
}

@Component({
  selector: 'app-upload-results',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload-results.html',
  styleUrl: './upload-results.scss',
})
export class UploadResults {
  readonly classes: string[] = ['5th', '6th', '7th'];
  readonly sections: string[] = ['A', 'B'];
  readonly subjects: string[] = ['Mathematics', 'Science', 'English', 'Hindi', 'Social Studies'];
  readonly examTypes: string[] = ['Unit Test', 'Midterm', 'Final'];

  students: StudentMarks[] = [
    { rollNo: 1, name: 'Anita Kumari', marks: null },
    { rollNo: 2, name: 'Rahul Singh', marks: null },
    { rollNo: 3, name: 'Suman Das', marks: null },
    { rollNo: 4, name: 'Vikram Patil', marks: null },
    { rollNo: 5, name: 'Pooja Verma', marks: null },
    { rollNo: 6, name: 'Imran Khan', marks: null },
  ];

  onSave(): void {
    // UI-only: no backend call, just a stub for now
    console.log('Results saved (mock):', this.students);
  }
}

