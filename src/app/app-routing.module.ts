import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColeccionesComponent } from './components/colecciones/colecciones.component';
import { AboutComponent } from './pages/about/about.component';
import { ColeccionComponent } from './pages/coleccion/coleccion.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path:'collections',component:ColeccionesComponent},
  {path:'about',component:AboutComponent},
  {path:'coleccion/:id',component:ColeccionComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:NotPageFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
