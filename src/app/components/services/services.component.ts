import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  public cards: Array<any> = [];
  constructor() {
    this.cards = [
      {
        image: 'fa-solid fa-money-bill-wave',
        title: 'Compra de Precatório',
        description: 'Pagamos à vista com segurança e agilidade.',
      },
      {
        image: 'fa-solid fa-file-lines',
        title: 'Análise Gratuita',
        description: 'Avaliamos seu precatório sem compromisso.',
      },

      {
        image: 'fa-solid fa-user-tie',
        title: 'Consultoria Legal',
        description: 'Esclareça dúvidas com quem entende do assunto.',
      },
      {
        image: 'fa-solid fa-folder-open',
        title: 'Documentação',
        description: 'Auxiliamos na parte burocrática e jurídica.',
      },
      {
        image: 'fa-solid fa-lock',
        title: 'Venda Segura',
        description: 'Processo transparente e contrato formalizado.',
      },
    ];
  }

  ngOnInit(): void {}

  public goToServices(): void {}

  public wppMessageOptions(option: string): void {
    const phoneNumber: string = '5511989483916';

    const messages: { [key: string]: string } = {
      'Compra de Precatório':
        'Olá! Tenho interesse em vender meu precatório. Pode me explicar como funciona o processo de compra?',
      'Análise Gratuita':
        'Olá! Gostaria de solicitar uma análise gratuita do meu precatório.',
      'Consultoria Legal':
        'Olá! Preciso de uma consultoria sobre meu precatório. Pode me ajudar?',
      Documentação:
        'Olá! Tenho dúvidas sobre a documentação necessária para vender meu precatório.',
      'Venda Segura':
        'Olá! Gostaria de entender como funciona a venda segura de um precatório.',
    };

    const message =
      messages[option] ||
      'Olá! Gostaria de mais informações sobre os serviços de precatórios.';

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  }
}
