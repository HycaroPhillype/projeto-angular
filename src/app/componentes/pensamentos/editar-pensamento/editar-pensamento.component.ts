import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento/pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  imports: [FormsModule],
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css',
})
export class EditarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };
  constructor(
    private router: Router,
    private service: PensamentoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id') as string
    console.log('Id Carregado', id);

    this.service.buscarPorId(id).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  editarPensamento() {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
