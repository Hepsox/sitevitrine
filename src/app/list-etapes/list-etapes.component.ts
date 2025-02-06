import { Component } from '@angular/core';
import { Etape } from '../etape.types';
import { Observable } from 'rxjs';
import { EtapesService } from '../etapes.service';

@Component({
  selector: 'app-list-etapes',
  templateUrl: './list-etapes.component.html',
  styleUrl: './list-etapes.component.css',
})
export class ListEtapesComponent {
  listeEtapes$: Observable<Etape[]> = this.service.getAllEtapes();
  expandedCards: boolean[] = []; // Tableau pour suivre l'état des cartes

  constructor(private service: EtapesService) {}
  toggleCard(index: number): void {
    // Basculer l'état de la carte
    this.expandedCards[index] = !this.expandedCards[index];
  }
}
