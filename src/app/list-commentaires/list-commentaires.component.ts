import { Component } from '@angular/core';
import { Commentaire } from '../models/commentaire.types';
import { Observable } from 'rxjs';
import { CommentairesService } from '../services/commentaires.service';

@Component({
  selector: 'app-list-commentaires',
  templateUrl: './list-commentaires.component.html',
  styleUrls: ['./list-commentaires.component.css'],
  host: { ngSkipHydration: 'true' },
})
export class ListCommentairesComponent {
  listeCommentaires$: Observable<Commentaire[]> =
    this.service.getAllCommentaires();

  // Tableau dynamique pour les couleurs
  borderColors = ['#ff5c83', '#B456F0', '#FF9100'];

  constructor(private service: CommentairesService) {}

  // Fonction pour obtenir une couleur de bordure basée sur l'index
  getBorderColor(index: number): string {
    // On utilise le modulo pour faire une rotation des couleurs
    return this.borderColors[index % this.borderColors.length];
  }

  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
