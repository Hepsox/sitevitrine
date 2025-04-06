import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Observable } from 'rxjs';
import { Project } from '../models/project.interface';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.css',
})
export class ListProjectsComponent implements OnInit {
  selectedIndustry: string | null = null;
  projectsList$!: Observable<Project[]>;
  industries$!: Observable<string[]>;

  constructor(
    private service: ProjectsService,
    private storageService: StorageService // Injecter StorageService
  ) {}

  ngOnInit() {
    this.projectsList$ = this.service.getAllProjects();
    this.industries$ = this.service.getIndustries();

    const storedIndustry = this.storageService.getItem('selectedIndustry');
    if (storedIndustry) {
      this.selectedIndustry = storedIndustry === '' ? null : storedIndustry;
      this.service.setIndustryFilter(this.selectedIndustry);
    }
  }

  filterProjects(industry: string | null) {
    this.selectedIndustry = industry;
    this.service.setIndustryFilter(industry);

    this.storageService.setItem('selectedIndustry', industry);
  }
}
