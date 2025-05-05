import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'automotive-services';
  isAtTop!: boolean;
  isDashboard = false; // Adicione esta propriedade para controlar o estado do dashboard

  constructor(private router: Router) {}

  ngOnInit() {
    AOS.init();

    const path = window.location.pathname;
    this.isDashboard = path.includes('dashboard');
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  //   const element = document.getElementById('nav'); // Substitua 'nav' pelo ID real do elemento
  //   if (element) {
  //     const rect = element.getBoundingClientRect();

  //     // Verifica se o elemento atingiu exatamente o topo da tela
  //     this.isAtTop = rect.top === 0;

  //     console.log('Está no topo:', this.isAtTop);
  //   }
  // }
}
