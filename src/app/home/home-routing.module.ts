import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('../login/login.page').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('../home/home.page').then(m => m.HomePageModule) },
  { path: 'attendance/:id', loadChildren: () => import('../attendance/attendance.page').then(m => m.AttendancePageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }