import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Testimonial } from '../models/testimonial.interfaces';

@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {
  constructor(private http: HttpClient) {}
  private _BASE_URL = 'assets/data/';

  getAllTestimonials(): Observable<Testimonial[]> {
    const filePath = `${this._BASE_URL}testimonials.json`;
    return this.http.get<Testimonial[]>(filePath);
  }

  getTestimonialsByProjectId(projectId: number): Observable<Testimonial[]> {
    const filePath = `${this._BASE_URL}projects.json`;

    return this.http.get<any[]>(filePath).pipe(
      map((projects) => {
        const project = projects.find((p) => p.id === projectId);
        return project?.testimonials || []; // Retourne les témoignages du projet, ou un tableau vide
      })
    );
  }
}
