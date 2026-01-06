import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-dashboard',
  standalone: true,
  templateUrl: './teacher.html',
  styleUrl: './teacher.scss',
})
export class Teacher {
  private readonly router = inject(Router);

  navigateToMarkAttendance(): void {
    this.router.navigate(['/teacher/attendance']);
  }
}

