import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Pensamento } from '../pensamento';
import { PensamentoComponent } from '../pensamento/pensamento.component';
@Component({
  selector: 'app-listar-pensamentos',
  standalone: true,
  imports: [CommonModule, PensamentoComponent],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css',
})
export class ListarPensamentosComponent {
  
  listarPensamento: Pensamento[] = [];
   

  constructor(private router: Router) {}

  navegarParaCriarPensamento() {
    this.router.navigate(['/criarPensamento'])

  }
}
