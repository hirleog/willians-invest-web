import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  faqs = [
    {
      pergunta: 'O que é um precatório?',
      resposta:
        'É uma ordem de pagamento emitida pelo governo após uma decisão judicial definitiva em que o Estado é condenado a pagar determinada quantia.',
      show: 'true',
    },
    {
      pergunta: 'Posso vender meu precatório?',
      resposta:
        'Sim, a Constituição permite a cessão de créditos. A venda é legal e pode ser uma solução para quem não quer esperar anos para receber.',
      show: 'false',
    },
    {
      pergunta: 'Quanto vale meu precatório?',
      resposta:
        'O valor de mercado depende de vários fatores, como tipo (federal, estadual ou municipal), tempo estimado para pagamento e regularidade documental. Fazemos essa avaliação gratuitamente.',
      show: 'false',
    },
    {
      pergunta: 'Como é feita a negociação?',
      resposta:
        'Após a análise e aprovação da documentação, apresentamos uma proposta. Caso aceite, formalizamos por contrato e realizamos o pagamento.',
      show: 'false',
    },
    {
      pergunta: 'É seguro vender meu precatório?',
      resposta:
        'Sim, quando feito com consultores sérios e contratos claros. Prezamos pela segurança jurídica e financeira em cada transação.',
      show: 'false',
    },
    {
      pergunta: 'Quais documentos são necessários?',
      resposta:
        'Identidade, CPF, comprovante de titularidade do precatório e documentos processuais. Ajudamos você em toda a coleta.',
      show: 'false',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
