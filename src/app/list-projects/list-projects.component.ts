import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { delay, Observable } from 'rxjs';
import { Project } from '../models/project.interface';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.css',
})
export class ListProjectsComponent implements OnInit {
  isLoading: boolean = true; // Indicateur de chargement
  selectedIndustry: string | null = null;
  projectsList$!: Observable<Project[]>;
  industries$!: Observable<string[]>;

  constructor(
    private service: ProjectsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.projectsList$ = this.service.getAllProjects().pipe(
      delay(500) // 2 secondes de délai
    );
    this.industries$ = this.service.getIndustries();

    this.route.queryParamMap.subscribe((params) => {
      const industry = params.get('industry');
      this.selectedIndustry = industry;
      this.service.setIndustryFilter(industry);
    });
  }

  filterProjects(industry: string | null) {
    this.selectedIndustry = industry;
    this.service.setIndustryFilter(industry);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        industry: industry ?? null,
      },
      queryParamsHandling: 'merge',
    });
  }
}
