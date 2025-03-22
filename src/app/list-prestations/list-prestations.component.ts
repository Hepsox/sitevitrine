import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../models/service.types';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.css'],
})
export class ListServicesComponent {
  listePrestations$: Observable<Service[]> = this.service.getAllServices();
  colors: string[] = ['#FF9002', '#B456F0', '#FE5B83']; // Couleurs des cartes
  colorTitles: string[] = ['#ffffff', '#ffffff', '#ffffff']; // Couleur des titres

  constructor(private service: ServicesService) {}

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
