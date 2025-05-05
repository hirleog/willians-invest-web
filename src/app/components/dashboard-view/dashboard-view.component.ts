// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UpdateFormModel } from '../interfaces/update-form.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css'],
})
export class DashboardViewComponent implements OnInit {
  dados: any;
  contatos: any;
  mostrarNaoContatados = false;
  token: string | null = null;

  showAlert: boolean = false;
  alertIndicator: boolean = false;
  alertMessage: string | null = null;

  paginaAtual = 1;
  itensPorPagina = 30;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.carregarContatos();
  }

  carregarContatos() {
    const headers = new HttpHeaders({
      'x-admin-key': environment.adminKey,
      'Content-Type': 'application/json',
    });

    this.http.get(`${environment.apiUrl}/form`, { headers }).subscribe({
      next: (res: any) => (this.contatos = res),
      error: (err) => console.error('Erro ao carregar dashboard', err),
    });
  }

  atualizarContato(id: number, contatado: boolean, observacao: string) {
    const headers = new HttpHeaders({
      'x-admin-key': environment.adminKey,
      'Content-Type': 'application/json',
    });

    const body = {
      contatado,
      observacao,
    };

    this.http
      .put(`${environment.apiUrl}/form/${id}`, body, { headers })
      .subscribe({
        next: (res) => {
          this.carregarContatos(); // recarrega a lista, se desejar
          this.showAlert = true;
          this.alertIndicator = true;
          this.alertMessage = 'Contato atualizado com sucesso!';

          setTimeout(() => {
            this.showAlert = false;
          }, 1500);
        },
        error: (err) => {
          this.alertIndicator = false;
          this.showAlert = true;
          this.alertMessage = 'Erro ao atualizar contato!';

          setTimeout(() => {
            this.showAlert = false;
          }, 1500);
        },
      });
  }

  // contatosContatados() {
  //   return this.mostrarNaoContatados
  //     ? this.contatos.filter((c: any) => !c.contatado)
  //     : this.contatos;
  // }

  marcarComoContatado(contato: any) {
    if (contato.observacao?.trim()) {
      contato.contatado = true;
    }
  }

  // paginação
  get totalPaginas(): number {
    return Math.ceil(
      this.contatosFiltradosSemPaginacao().length / this.itensPorPagina
    );
  }

  contatosFiltradosSemPaginacao() {
    return this.mostrarNaoContatados
      ? this.contatos.filter((c: any) => !c.contatado)
      : this.contatos;
  }

  contatosFiltrados(): any[] {
    let lista = this.contatos;

    if (this.mostrarNaoContatados) {
      lista = lista.filter((c: any) => !c.contatado);
    }

    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    return lista.slice(inicio, fim);
  }

  mudarPagina(delta: number) {
    const novaPagina = this.paginaAtual + delta;
    if (novaPagina >= 1 && novaPagina <= this.totalPaginas) {
      this.paginaAtual = novaPagina;
    }
  }
}
