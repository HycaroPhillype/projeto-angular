// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { PensamentoService } from '../pensamento/pensamento.service';
// import { Pensamento } from '../pensamento';

// @Component({
//   selector: 'app-liste-pensamento',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './liste-pensamento.component.html',
//   styleUrl: './liste-pensamento.component.css',
// })
// export class ListePensamentoComponent {

//   listarPensamento: Pensamento[] = [];

//   constructor(private service: PensamentoService) {}

//   ngOnInit(): void {
//     this.service.listar().subscribe((listarPensamento) => {
//       console.log(listarPensamento)
//       this.listarPensamento = listarPensamento;
//     });
//   }
// }
