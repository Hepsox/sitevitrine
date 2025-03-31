import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.interface';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { Testimonial } from '../models/testimonial.interfaces';
import { TestimonialsService } from '../services/testimonials.service';

@Component({
  selector: 'app-template-project',
  templateUrl: './template-project.component.html',
  styleUrl: './template-project.component.css',
})
export class TemplateProjectComponent implements OnInit {
  project$: Observable<Project | null> | undefined;
  testimonials$!: Observable<Testimonial[]>;
  borderColors = ['#ff5c83', '#B456F0', '#FF9100'];

  constructor(
    private projectService: ProjectsService,
    private testimonialsService: TestimonialsService,

    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.project$ = this.projectService.getProjectBySlug(slug);
    this.testimonials$ = this.testimonialsService.getTestimonialsBySlug(slug);
  }
}
