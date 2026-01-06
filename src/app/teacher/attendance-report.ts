import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AttendanceRow {
  studentName: string;
  totalDays: number;
  presentDays: number;
  absentDays: number;
  percentage: string;
}

@Component({
  selector: 'app-attendance-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attendance-report.html',
  styleUrl: './attendance-report.scss',
})
export class AttendanceReport {
  readonly classes: string[] = ['5th', '6th', '7th'];
  readonly sections: string[] = ['A', 'B'];
  readonly months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  rows: AttendanceRow[] = [
    { studentName: 'Anita Kumari', totalDays: 22, presentDays: 21, absentDays: 1, percentage: '95%' },
    { studentName: 'Rahul Singh', totalDays: 22, presentDays: 20, absentDays: 2, percentage: '91%' },
    { studentName: 'Suman Das', totalDays: 22, presentDays: 19, absentDays: 3, percentage: '86%' },
    { studentName: 'Vikram Patil', totalDays: 22, presentDays: 18, absentDays: 4, percentage: '82%' },
    { studentName: 'Pooja Verma', totalDays: 22, presentDays: 22, absentDays: 0, percentage: '100%' },
  ];

  onDownload(): void {
    // UI-only: no real download, just a placeholder for now
    console.log('Download Report (PDF) clicked - mock only');
  }
}


