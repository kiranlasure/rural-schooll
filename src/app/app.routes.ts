import { Routes } from '@angular/router';
import { Login } from './auth/login/login';

export const routes: Routes = [
  // Redirect empty path to /login on application load
  { path: '', pathMatch: 'full', redirectTo: 'login' },

  // Login screen
  { path: 'login', component: Login },

  // Placeholder dashboard routes (to be implemented later)
  { path: 'admin', loadComponent: () => import('./admin/admin').then(m => m.Admin) },
  { path: 'teacher', loadComponent: () => import('./teacher/teacher').then(m => m.Teacher) },
  { path: 'teacher/attendance', loadComponent: () => import('./teacher/mark-attendance').then(m => m.MarkAttendance) },
  { path: 'student', loadComponent: () => import('./student/student').then(m => m.Student) },

  // Wildcard: redirect any unknown route back to login
  { path: '**', redirectTo: 'login' },
];
