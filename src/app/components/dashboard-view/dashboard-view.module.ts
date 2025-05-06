import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Adicione esta importação
import { DashboardViewComponent } from './dashboard-view.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardViewComponent,
  },
];

@NgModule({
  declarations: [DashboardViewComponent], // Lembre-se de declarar seu componente
  imports: [
    CommonModule,
    // Remova AppRoutingModule - não deve ser importado em módulos filhos
    RouterModule.forChild(routes), // Adicione esta linha para configurar as rotas do módulo
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [DashboardViewComponent], // Exporte RouterModule se necessário
})
export class DashboardViewModule {}
