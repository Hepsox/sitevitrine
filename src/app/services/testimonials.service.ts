import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Testimonial } from '../models/testimonial.interfaces';

@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {
  constructor(private http: HttpClient) {}
  private _BASE_URL = 'assets/data/testimonials.json';

  getAllTestimonials(): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>(this._BASE_URL);
  }
}
