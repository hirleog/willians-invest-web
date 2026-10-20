import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  faqs = [
    {
      pergunta: 'O que é a antecipação ou cessão de precatórios?',
      resposta:
        'A antecipação de precatórios é um direito assegurado pela Constituição Federal que permite ao credor transferir seu título judicial a investidores e receber o valor à vista em sua conta bancária, evitando as longas filas e a demora do setor público.',
    },
    {
      pergunta: 'É seguro e legal vender o meu precatório?',
      resposta:
        'Sim, 100% legal e seguro. A negociação é formalizada por meio de Escritura Pública ou Contrato de Cessão de Crédito registrado em cartório e subsequentemente protocolado e homologado pelo juiz nos autos do processo.',
    },
    {
      pergunta: 'Quanto tempo leva para o dinheiro cair na minha conta?',
      resposta:
        'Após o envio da documentação e a conferência jurídica (que leva em média de 24h a 48h úteis), a formalização é assinada e o pagamento é transferido via TED ou PIX diretamente para a conta de sua titularidade.',
    },
    {
      pergunta: 'Quais tipos de precatórios a Willians Invest negocia?',
      resposta:
        'Negociamos Precatórios Federais (TRF1 a TRF6, incluindo ações contra INSS, União e órgãos federais), Precatórios Estaduais e Precatórios Municipais de diversas regiões do país.',
    },
    {
      pergunta: 'Eu pago alguma taxa para ter meu precatório avaliado?',
      resposta:
        'Não! A avaliação, o cálculo do valor de mercado e a consultoria inicial são 100% gratuitas e sem compromisso. Você só decide negociar se a proposta atender às suas expectativas.',
    },
    {
      pergunta: 'Quais documentos preciso ter em mãos para iniciar?',
      resposta:
        'RG ou CNH válidos, comprovante de endereço recente (últimos 90 dias), certidão de casamento atualizada (caso seja casado) e dados bancários. Você pode consultar nosso Checklist completo na seção de Documentos!',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
