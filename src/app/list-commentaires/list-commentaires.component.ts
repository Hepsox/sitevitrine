import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TestimonialsService } from '../services/testimonials.service';
import { Testimonial } from '../models/testimonial.interfaces';

@Component({
  selector: 'app-list-commentaires',
  templateUrl: './list-commentaires.component.html',
  styleUrls: ['./list-commentaires.component.css'],
  host: { ngSkipHydration: 'true' },
})
export class ListTestimonialsComponent {
  borderColors = ['#ff5c83', '#B456F0', '#FF9100'];

  testimonialsList$: Observable<Testimonial[]> =
    this.service.getAllTestimonials();

  constructor(private service: TestimonialsService) {}

  getBorderColor(index: number): string {
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
