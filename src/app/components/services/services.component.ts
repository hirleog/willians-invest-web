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
    const phoneNumber: string = '5511949054658';

    const messages: { [key: string]: string } = {
      'Rescisão Contratual':
        'Olá! Gostaria de saber mais sobre o serviço de Rescisão Contratual.',
      Reintegração:
        'Olá! Gostaria de entender como funciona o serviço de Reintegração.',
      'Assédio Moral':
        'Olá! Preciso de informações sobre casos de Assédio Moral.',
      'FGTS Retido': 'Olá! Tenho dúvidas sobre como liberar meu FGTS retido.',
      'Acidente de Trabalho':
        'Olá! Quero saber mais sobre os serviços relacionados a Acidente de Trabalho.',
      'Adicional Noturno':
        'Olá! Gostaria de saber mais sobre Adicional Noturno.',
      'Horas Extras':
        'Olá! Preciso de ajuda com questões relacionadas a Horas Extras.',
      'Desvio de Função':
        'Olá! Quero entender como lidar com um Desvio de Função.',
      'Registro em Carteira':
        'Olá! Gostaria de mais informações sobre Registro em Carteira.',
      'Licença-Maternidade':
        'Olá! Preciso de informações sobre Licença-Maternidade.',
      'Equiparação Salarial':
        'Olá! Quero saber mais sobre Equiparação Salarial.',
      'Assédio Sexual': 'Olá! Preciso de orientação sobre Assédio Sexual.',
      'Adicional de Insalubridade':
        'Olá! Gostaria de entender mais sobre Adicional de Insalubridade.',
      'Acordo Trabalhista':
        'Olá! Quero mais informações sobre Acordo Trabalhista.',
      'Reclamação Trabalhista':
        'Olá! Preciso de ajuda com uma Reclamação Trabalhista.',
      'Previdência Social': 'Olá! Tenho dúvidas sobre Previdência Social.',
      'Seguro-Desemprego':
        'Olá! Gostaria de informações sobre Seguro-Desemprego.',
      'Demissão por Justa Causa':
        'Olá! Quero entender como funciona Demissão por Justa Causa.',
      'Estabilidade Gestante':
        'Olá! Preciso saber mais sobre Estabilidade Gestante.',
      'Contratos de Trabalho':
        'Olá! Quero informações sobre Contratos de Trabalho.',
    };

    const message =
      messages[option] ||
      'Olá! Gostaria de mais informações sobre seus serviços.';

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  }
}
