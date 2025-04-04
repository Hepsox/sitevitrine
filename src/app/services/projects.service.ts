import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  map,
  Observable,
  of,
} from 'rxjs';
import { Project } from '../models/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}
  private _BASE_URL = 'assets/data/projects.json';

  private industryFilter$ = new BehaviorSubject<string | null>(null);

  getAllProjects(): Observable<Project[]> {
    return combineLatest([
      this.http.get<Project[]>(this._BASE_URL).pipe(
        map((projects) =>
          projects.filter((project) => project.isVisibleOnProjectsPage === true)
        ),
        catchError((error) => {
          console.error('Erreur lors de la récupération des projets:', error);
          return of([]);
        })
      ),
      this.industryFilter$,
    ]).pipe(
      map(([projects, industry]) => {
        if (!industry) return projects;
        const industryLower = industry.toLowerCase();
        return projects.filter(
          (project) => project.industry?.toLowerCase() === industryLower
        );
      })
    );
  }

  getIndustries(): Observable<string[]> {
    return this.http.get<Project[]>(this._BASE_URL).pipe(
      map((projects) => {
        const industries = projects
          .filter((project) => project.isVisibleOnProjectsPage === true)
          .map((project) => project.industry?.toLowerCase())
          .filter((industry): industry is string => !!industry);

        return Array.from(new Set(industries));
      }),
      catchError((error) => {
        console.error('Erreur lors de la récupération des industries:', error);
        return of([]);
      })
    );
  }

  setIndustryFilter(industry: string | null) {
    this.industryFilter$.next(industry);
  }

  getProjectBySlug(slug: string): Observable<Project | null> {
    return this.http.get<Project[]>(this._BASE_URL).pipe(
      map((projects) => {
        const project = projects.find((project) => project.slug === slug);
        return project || null;
      }),
      catchError((error) => {
        console.error('Erreur lors de la récupération du projet:', error);
        return of(null);
      })
    );
  }
}
