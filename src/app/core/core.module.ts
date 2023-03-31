import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  exports: [
    HttpClientModule
  ]
})
export class CoreModule { }
