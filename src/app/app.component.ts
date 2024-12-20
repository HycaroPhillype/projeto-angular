import { Component } from '@angular/core';
import { CabecalhoComponent,} from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CabecalhoComponent, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'meu-primeiro-projeto-angular';
}

