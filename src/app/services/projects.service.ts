import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Project } from '../models/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}
  private _BASE_URL = 'assets/data/projects.json';

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this._BASE_URL).pipe(
      map((projects) =>
        projects.filter((project) => project.isVisibleOnProjectsPage === true)
      ),
      catchError((error) => {
        console.error('Erreur lors de la récupération des projets:', error);
        return of([]);
      })
    );
  }

  getProjectBySlug(slug: string): Observable<Project | null> {
    return this.http.get<Project[]>(this._BASE_URL).pipe(
      map((projects) => {
        const project = projects.find((project) => project.slug === slug);
        return project || null; // Si aucun projet n'est trouvé, retourne null
      }),
      catchError((error) => {
        console.error('Erreur lors de la récupération du projet:', error);
        return of(null); // En cas d'erreur, retourne null
      })
    );
  }
}
