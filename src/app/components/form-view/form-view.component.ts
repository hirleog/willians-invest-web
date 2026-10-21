import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css'],
})
export class FormViewComponent implements OnInit {
  formulario!: FormGroup;
  enviadoSucesso = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      telefone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required]],
      tipoPrecatorio: ['Federal (TRF)', Validators.required],
      detalhes: [''],
    });
  }

  enviarFormulario(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const { nome, telefone, email, cpf, tipoPrecatorio, detalhes } = this.formulario.value;

    const mensagem =
`*CONSULTA DE PRECATÓRIO - WILLIANS INVEST*
_Negócios em Precatórios_

Olá! Preenchi o formulário no site e gostaria de uma avaliação gratuita do meu precatório:

• *Nome:* ${nome}
• *WhatsApp:* ${telefone}
• *E-mail:* ${email}
• *CPF:* ${cpf}
• *Esfera do Precatório:* ${tipoPrecatorio}
${detalhes ? `• *Informações do Processo / Valor:* ${detalhes}\n` : ''}
Aguardando o contato de um consultor para avaliação. Obrigado!`;

    const foneComercial = '5511989483916';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${foneComercial}&text=${encodeURIComponent(mensagem)}`;

    // Abre o WhatsApp comercial em nova aba
    window.open(whatsappUrl, '_blank');

    this.enviadoSucesso = true;
    setTimeout(() => {
      this.formulario.reset({
        tipoPrecatorio: 'Federal (TRF)'
      });
      this.enviadoSucesso = false;
    }, 6000);
  }
}
