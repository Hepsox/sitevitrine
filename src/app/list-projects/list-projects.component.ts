import { Component } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Observable } from 'rxjs';
import { Project } from '../models/project.interface';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.css',
})
export class ListProjectsComponent {
  projectsList$: Observable<Project[]> = this.service.getAllProjects();

  constructor(private service: ProjectsService) {}
}
