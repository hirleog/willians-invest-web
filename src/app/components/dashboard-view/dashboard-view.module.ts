import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DashboardViewComponent } from './dashboard-view.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardViewComponent, // essa rota responde a "/dashboard"
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
})
export class DashboardViewModule {}
