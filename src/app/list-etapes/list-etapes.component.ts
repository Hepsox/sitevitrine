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
  expandedCards: boolean[] = [];

  constructor(private service: EtapesService) {}

  ngOnInit(): void {
    // Initialiser l'état des cartes lorsque la liste des étapes est chargée
    this.listeEtapes$.subscribe((listeEtapes) => {
      // Initialiser un tableau 'expandedCards' avec 'false' pour chaque étape
      this.expandedCards = new Array(listeEtapes.length).fill(false);
    });
  }

  toggleCard(index: number): void {
    // Fermer toutes les cartes sauf celle sur laquelle l'utilisateur a cliqué
    this.expandedCards = this.expandedCards.map((expanded, i) =>
      i === index ? !expanded : false
    );
  }
}
