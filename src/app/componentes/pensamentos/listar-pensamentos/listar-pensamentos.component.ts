import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento/pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  standalone: true,
  imports: [CommonModule, PensamentoComponent],
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent {
  listarPensamento: Pensamento[] = [];

  constructor(private service: PensamentoService, private router: Router) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listarPensamento) => {
      console.log(listarPensamento);
      this.listarPensamento = listarPensamento;
    });
  }

  navegarParaCriarPensamento(): void {
    this.router.navigate(['/criarPensamento']);
  }
}
