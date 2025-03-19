import { Component } from '@angular/core';
import { PrestationsService } from '../prestations.service';
import { Prestation } from '../prestation.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.css'],
})
export class ListPrestationsComponent {
  listePrestations$: Observable<Prestation[]> =
    this.service.getAllPrestations();
  colors: string[] = ['#FF9002', '#B456F0', '#FE5B83']; // Couleurs des cartes
  colorTitles: string[] = ['#ffffff', '#ffffff', '#ffffff']; // Couleur des titres

  constructor(private service: PrestationsService) {}

  getCardStyle(i: number): any {
    return {
      'background-color': this.colors[i], // Couleur de fond de la carte
      width: '90%',
      [i % 2 === 0 ? 'margin-left' : 'margin-right']: 'auto',
      transform:
        'rotate(' + (i === 0 ? '5deg' : i === 1 ? '-5deg' : '3deg') + ')',
    };
  }
}
