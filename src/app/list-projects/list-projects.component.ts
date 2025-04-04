import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Observable } from 'rxjs';
import { Project } from '../models/project.interface';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.css',
})
export class ListProjectsComponent implements OnInit {
  selectedIndustry: string | null = null;
  projectsList$!: Observable<Project[]>;
  industries$!: Observable<string[]>;
  constructor(private service: ProjectsService) {}

  ngOnInit() {
    this.projectsList$ = this.service.getAllProjects();
    this.industries$ = this.service.getIndustries();
  }

  filterProjects(industry: string | null) {
    this.selectedIndustry = industry;
    this.service.setIndustryFilter(industry);
  }
}
