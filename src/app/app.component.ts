import { Component } from '@angular/core';
import { CabecalhoComponent,} from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component'; 
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, CabecalhoComponent, RodapeComponent, CriarPensamentosComponent, ListarPensamentosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})

export class AppComponent {
  title = 'meu-primeiro-projeto-angular';
}

