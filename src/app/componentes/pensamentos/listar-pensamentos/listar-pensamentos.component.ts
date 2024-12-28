import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-listar-pensamentos',
  standalone: true,
  imports: [CommonModule, PensamentoComponent],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css',
})
export class ListarPensamentosComponent {
  
  listarPensamento = [
    // {
    //   conteudo: "Comonicando-se com componente filho",
    //   autoria: "Componente pai",
    //   modelo: "modelo3"
    // },
    // {
    //   conteudo: "Minha propriedade é decorada com @Input()",
    //   autoria: "Componente filho",
    //   modelo: "modelo2"
    // }
  ];

  constructor(private router: Router) {}

  navegarParaCriarPensamento() {
    this.router.navigate(['/criarPensamento'])

  }
}
