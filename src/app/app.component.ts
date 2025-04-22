import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'automotive-services';
  isAtTop!: boolean;

  ngOnInit() {
    AOS.init();
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