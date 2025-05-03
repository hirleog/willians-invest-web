import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css'],
})
export class FormViewComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      telefone: ['', Validators.required],
    });
  }

  enviarFormulario() {
    const formData = { ...this.formulario.value };
    formData.cpf = formData.cpf.replace(/[.-]/g, ''); // Remove pontos e traços do CPF
    formData.telefone = formData.telefone.replace(/[-()\s]/g, ''); // Remove traços, parênteses e espaços do telefone
    
    if (this.formulario.valid) {
      this.http.post('http://localhost:3000/form', formData).subscribe({
        next: () => {
          alert('Dados enviados com sucesso!');
          this.formulario.reset();
        },
        error: (err) => {
          alert('Erro ao enviar os dados.');
          console.error(err);
        },
      });
    } else {
      alert('Preencha todos os campos corretamente.');
    }
  }
}
