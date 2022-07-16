import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { AboutComponent } from './about/about.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    NotPageFoundComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ],
  exports:[
    AboutComponent
  ]
})
export class PagesModule { }
