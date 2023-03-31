import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './pages/home/home.module';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { SharedRoutingModule } from './shared-routing.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HomeModule,
    NotFoundModule
  ]
})
export class SharedModule { }
