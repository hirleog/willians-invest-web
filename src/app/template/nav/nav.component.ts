import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public openClose: boolean = false;
  scrolled = false;
  previousScrollPosition = window.pageYOffset;
  navbarVisible = true;
  lastScrollTop = 0;
  isAtTop!: boolean;

  constructor() { }

  ngOnInit(): void { }

  public menu() {
    this.openClose = !this.openClose;
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const currentScroll = window.pageYOffset || document.documentElement.scrollTop;


    // const element = document.getElementById('nav'); // Substitua 'nav' pelo ID real do elemento
    // if (element) {
    //   const rect = element.getBoundingClientRect();

    //   // Verifica se o elemento atingiu exatamente o topo da tela
    //   this.isAtTop = rect.top === 0;

    //   console.log('Está no topo:', this.isAtTop);
    // }



    // Lógica de ocultar/mostrar o navbar com base no scroll
  //   if (currentScroll > this.lastScrollTop) {
  //     // Rolando para baixo: esconde o navbar
  //     this.scrolled = true;
  //   } else {
  //     // Rolando para cima: mostra o navbar
  //     this.scrolled = false;
  //   }

  //   this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  // }
}
