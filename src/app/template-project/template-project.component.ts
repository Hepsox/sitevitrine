import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.interface';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template-project',
  templateUrl: './template-project.component.html',
  styleUrl: './template-project.component.css',
})
export class TemplateProjectComponent implements OnInit {
  project$: Observable<Project | null> | undefined;
  constructor(
    private service: ProjectsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.project$ = this.service.getOneProject(id);
  }
}
