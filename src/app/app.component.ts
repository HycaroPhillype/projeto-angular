import { Component } from '@angular/core';
import { CabecalhoComponent,} from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component'; 
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { NavigationStart, RouterOutlet, Router } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, CabecalhoComponent, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title = 'meu-primeiro-projeto-angular';



}


