import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamentos',
  standalone: true,
  imports: [],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css',
})
export class ListarPensamentosComponent {
  constructor(private router: Router) {}

  navegarParaCriarPensamento() {
    this.router.navigate(['/criarPensamento'])

  }
}
