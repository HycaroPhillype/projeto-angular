import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pensamento',
  imports: [ CommonModule ],
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

  @Input() pensamento = {
    conteudo: " Eu sou foda",
    autoria: "Hycaro",
    modelo: "modelo3"
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256 ) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
      
  }

}
