import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  public cards: Array<any> = [
    {
      icon: 'fa-solid fa-money-bill-transfer',
      title: 'Compra e Antecipação',
      tag: 'Mais Procurado',
      description: 'Receba o valor do seu precatório à vista via TED ou PIX, sem esperar anos pela fila de pagamento do governo.',
    },
    {
      icon: 'fa-solid fa-file-shield',
      title: 'Avaliação Jurídica Grátis',
      tag: 'Zero Custo',
      description: 'Nossa equipe jurídica analisa seu processo, calcula o valor real de mercado e apresenta proposta sem compromisso.',
    },
    {
      icon: 'fa-solid fa-landmark',
      title: 'Precatórios Federais (TRF)',
      tag: 'Alta Liquidez',
      description: 'Condições exclusivas para títulos federais de todos os Tribunais Regionais Federais (TRF1 a TRF6).',
    },
    {
      icon: 'fa-solid fa-city',
      title: 'Estaduais e Municipais',
      tag: 'Todo o Brasil',
      description: 'Estruturação especializada para precatórios contra Governos Estaduais e Prefeituras em todo o território nacional.',
    },
    {
      icon: 'fa-solid fa-folder-closed',
      title: 'Suporte Documental Total',
      tag: 'Sem Burocracia',
      description: 'Auxiliamos na obtenção de certidões, certidão de casamento e documentação processual necessária.',
    },
    {
      icon: 'fa-solid fa-handshake-angle',
      title: 'Cessão 100% Homologada',
      tag: 'Segurança Máxima',
      description: 'Contrato de cessão de crédito registrado em cartório público e protocolado nos autos judiciais.',
    },
  ];

  public steps = [
    {
      number: '01',
      title: 'Consulta Rápida',
      description: 'Preencha o formulário ou envie uma mensagem no WhatsApp com as informações básicas do seu precatório.',
    },
    {
      number: '02',
      title: 'Auditoria Gratuita',
      description: 'Nossos consultores jurídicos analisam a regularidade do processo e apuram o valor presente com agilidade.',
    },
    {
      number: '03',
      title: 'Proposta Transparente',
      description: 'Você recebe uma proposta clara, justa e sem pegadinhas ou custos ocultos para sua tomada de decisão.',
    },
    {
      number: '04',
      title: 'Pagamento à Vista',
      description: 'Após a formalização e registro da cessão, o valor é creditado imediatamente na sua conta bancária.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  public wppMessageOptions(option: string): void {
    const phoneNumber = '5511989483916';
    const message = `Olá, Willians Invest! Gostaria de mais informações sobre o serviço de *${option}*.`;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  }
}
