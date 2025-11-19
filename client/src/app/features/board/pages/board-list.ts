import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para *ngFor e *ngIf
import { Apollo } from 'apollo-angular';
// Importamos a query que você criou no arquivo separado
import { GET_BOARDS } from '../data-access/board.queries';

@Component({
  selector: 'app-board-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board-list.html',
  styleUrls: ['./board-list.css'] // ou .css se seu projeto for css
})
export class BoardListComponent implements OnInit {
  boards: any[] = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    // A mesma lógica de antes, mas agora no lugar certo
    this.apollo
      .watchQuery({
        query: GET_BOARDS,
        // fetchPolicy: 'network-only' // Descomente se quiser forçar busca no server sempre
      })
      .valueChanges.subscribe((result: any) => {
        this.boards = result?.data?.boards;
        this.loading = result.loading;
        this.error = result.error;
        console.log('Dados recebidos:', this.boards); // Para debug
      });
  }
}