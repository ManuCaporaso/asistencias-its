import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  { 
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  { 
    path: 'attendance/:id',
    loadComponent: () => import('./attendance/attendance.page').then(m => m.AttendancePage)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }