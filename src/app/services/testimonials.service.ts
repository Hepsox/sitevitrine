import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Testimonial } from '../models/testimonial.interfaces';
import { Project } from '../models/project.interface';

@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {
  constructor(private http: HttpClient) {}
  private _BASE_URL = 'assets/data/projects.json';

  getAllTestimonialsOnProject(): Observable<Testimonial[]> {
    return this.http.get<Project[]>(this._BASE_URL).pipe(
      map((projects) => {
        return projects.flatMap((project) => project.testimonials);
      }),
      catchError((error) => {
        console.error('Erreur lors de la récupération des témoignages:', error);
        return of([]);
      })
    );
  }

  getTestimonialsBySlug(slug: string): Observable<Testimonial[]> {
    return this.http.get<Project[]>(this._BASE_URL).pipe(
      map((projects) => {
        const project = projects.find((p) => p.slug === slug);
        return project ? project.testimonials : []; // Retourne les témoignages associés au projet
      })
    );
  }
}
