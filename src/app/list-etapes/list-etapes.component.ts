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
  etapeOuverte: number | null = null;

  constructor(private service: EtapesService) {}

  ngOnInit(): void {
    // Initialiser l'état des cartes lorsque la liste des étapes est chargée
    this.listeEtapes$.subscribe((listeEtapes) => {});
  }
}
