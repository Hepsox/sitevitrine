import { Component } from '@angular/core';
import { PrestationsService } from '../prestations.service';
import { Prestation } from '../prestation.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrl: './list-prestations.component.css',
})
export class ListPrestationsComponent {
  listePrestations$: Observable<Prestation[]> =
    this.service.getAllPrestations();
  colors: string[] = ['#07103f', '#B456F0', '#FF9100'];

  constructor(private service: PrestationsService) {}
  getArriereCarteTransform(i: number): string {
    switch (i) {
      case 0:
        return 'rotate(5deg) translate(10px, 10px)'; // 1ère carte : rotation et translation
      case 1:
        return 'rotate(-5deg) translate(-10px, -10px)'; // 2ème carte : rotation et translation inversées
      case 2:
        return 'rotate(3deg) translate(10px, -10px)'; // 3ème carte : autre rotation et translation
      default:
        return 'rotate(0deg) translate(0px, 0px)';
    }
  }
}
