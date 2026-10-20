import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
})
export class ChecklistComponent implements OnInit {
  checklistItems = [
    {
      icon: 'fa-regular fa-address-card',
      title: 'RG OU CNH',
      description: 'Documento de identificação oficial com foto do titular (RG ou CNH válidos).',
      tag: 'Identificação',
    },
    {
      icon: 'fa-solid fa-house-chimney',
      title: 'COMPROVANTE DE ENDEREÇO ATUALIZADO',
      description: 'Conta recente de água, luz, internet ou telefone emitida nos últimos 90 dias.',
      tag: 'Residência',
    },
    {
      icon: 'fa-solid fa-ring',
      title: 'CERTIDÃO DE CASAMENTO ATUALIZADA',
      description: 'Necessária se casado(a). Caso não possua a via atualizada, nossa equipe pode solicitar a emissão (Custo de R$ 60,00).',
      tag: 'Estado Civil',
    },
    {
      icon: 'fa-regular fa-envelope',
      title: 'E-MAIL E TELEFONE (WHATSAPP)',
      description: 'Seus contatos principais para comunicação ágil e transparente durante todas as etapas da cessão.',
      tag: 'Contato',
    },
    {
      icon: 'fa-solid fa-user-group',
      title: 'RG OU CNH DO CÔNJUGE',
      description: 'Documento de identificação oficial com foto do seu cônjuge ou companheiro(a).',
      tag: 'Cônjuge',
    },
    {
      icon: 'fa-solid fa-building-columns',
      title: 'DADOS BANCÁRIOS',
      description: 'Conta corrente ou poupança no nome do titular (e cônjuge, se aplicável) para recebimento do pagamento à vista.',
      tag: 'Pagamento',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  enviarDocumentosWhatsapp(): void {
    const telefone = '5511989483916';
    const msg = 'Olá, Willians Invest! Já estou organizando meus documentos para negociação do precatório e gostaria de enviar para análise.';
    window.open(`https://wa.me/${telefone}?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
