import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
  rollNo: number;
  name: string;
  present: boolean;
}

@Component({
  selector: 'app-mark-attendance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mark-attendance.html',
  styleUrl: './mark-attendance.scss',
})
export class MarkAttendance {
  readonly today: string = new Date().toISOString().substring(0, 10);

  readonly classes: string[] = ['5th', '6th', '7th'];
  readonly sections: string[] = ['A', 'B'];

  students: Student[] = [
    { rollNo: 1, name: 'Anita Kumari', present: true },
    { rollNo: 2, name: 'Rahul Singh', present: true },
    { rollNo: 3, name: 'Suman Das', present: true },
    { rollNo: 4, name: 'Vikram Patil', present: true },
    { rollNo: 5, name: 'Pooja Verma', present: true },
    { rollNo: 6, name: 'Imran Khan', present: true },
  ];

  toggleAttendance(student: Student): void {
    student.present = !student.present;
  }

  onSave(): void {
    // UI-only: no backend call, just a stub for now
    console.log('Attendance saved (mock):', this.students);
  }
}


