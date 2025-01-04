import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pensamento } from '../pensamento';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-pensamento',
  imports: [ CommonModule, RouterModule ],
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: " Eu sou foda",
    autoria: "Hycaro",
    modelo: "modelo3"
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo?.length >= 256 ) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
      
  }

}
