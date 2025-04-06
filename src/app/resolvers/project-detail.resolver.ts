import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/project.interface';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

export const projectDetailResolver: ResolveFn<Project> = (route, state) => {
  const projectService = inject(ProjectsService);
  const slug = route.paramMap.get('slug');
  return projectService.getProjectBySlug(slug!).pipe(
    map((project) => {
      if (!project) {
        throw new Error('Projet non trouvé');
      }
      return project;
    })
  );
};
