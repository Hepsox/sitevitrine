import { ResolveFn } from '@angular/router';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/project.interface';
import { inject } from '@angular/core';

export const projectListResolver: ResolveFn<Project[]> = (route, state) => {
  const projectService = inject(ProjectsService);
  return projectService.getAllProjects();
};
