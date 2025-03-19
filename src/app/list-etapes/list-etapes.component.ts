import { Component } from '@angular/core';
import { Etape } from '../etape.types';
import { Observable } from 'rxjs';
import { EtapesService } from '../etapes.service';

@Component({
  selector: 'app-list-etapes',
  templateUrl: './list-etapes.component.html',
  styleUrls: ['./list-etapes.component.css'],
})
export class ListEtapesComponent {
  listeEtapes$: Observable<Etape[]> = this.service.getAllEtapes();
  etapeOuverte: number | null = null;
  otherEtapeHovered: boolean = false;
  anyEtapeClicked: boolean = false;
  hasExitedOnce: boolean = false; // Ajout d'une variable pour s'assurer que la classe disparaît après sortie

  constructor(private service: EtapesService) {}

  ngOnInit(): void {
    this.listeEtapes$.subscribe(() => {});
  }

  onEtapeClick(i: number): void {
    if (this.etapeOuverte === i) {
      this.etapeOuverte = null;
      this.anyEtapeClicked = false;
    } else {
      this.etapeOuverte = i;
      this.anyEtapeClicked = true;
    }
    this.hasExitedOnce = true; // Indique qu'une action a été faite
  }

  onEtapeHover(): void {
    this.otherEtapeHovered = true;
  }

  onEtapeLeave(): void {
    this.otherEtapeHovered = false;
  }

  onContainerLeave(): void {
    this.otherEtapeHovered = false;
    this.etapeOuverte = null;
    this.hasExitedOnce = true; // Marque que l'utilisateur a quitté la zone au moins une fois
  }
}
