import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Exercice1Component } from './pages/exercice1/exercice1.component';
import { Exercice2Component } from './pages/exercice2/exercice2.component';
import { Exercice3Component } from './pages/exercice3/exercice3.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home', 
    component: HomeComponent
  },
  {
    path:'exercice1', 
    component: Exercice1Component
  },
  {
    path:'exercice2', 
    component: Exercice2Component
  },
  {
    path:'exercice3', 
    component: Exercice3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
