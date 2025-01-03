import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento/pensamento.service';

@Component({
  selector: 'app-criar-pensamentos',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './criar-pensamentos.component.html',
  styleUrl: './criar-pensamentos.component.css'
})
export class CriarPensamentosComponent {
  
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(private router: Router, private service:PensamentoService ) {}

  navegarParaListarPensamento() {
    this.router.navigate(['/listarPensamento'])


  }
  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }
}

