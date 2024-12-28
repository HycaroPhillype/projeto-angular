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
    {
      conteudo: "Comonicando-se com componente filho",
      autoria: "Componente pai",
      modelo: "modelo3"
    },
    {
      conteudo: "Minha propriedade é decorada com @Input()",
      autoria: "Componente filho",
      modelo: "modelo2"
    },
    {
      conteudo: "Se o universo é infinito e cheio de bilhões de galáxias, cada uma com bilhões de estrelas, seria uma extraordinária presunção acreditar que somos os únicos seres inteligentes a emergir em meio à vastidão do cosmos. A vida alienígena pode estar nos observando silenciosamente, esperando que estejamos prontos para compreendê-la",
      autoria: "",
      modelo: "modelo1"
    }
  ];
   

  constructor(private router: Router) {}

  navegarParaCriarPensamento() {
    this.router.navigate(['/criarPensamento'])

  }
}
