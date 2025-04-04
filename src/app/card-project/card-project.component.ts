import { Component, Input } from '@angular/core';
import { Project } from '../models/project.interface';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css',
})
export class CardProjectComponent {
  @Input() project!: Project;
  shortDescription: string = '';

  ngOnInit(): void {
    this.shortDescription = this.getShortDescription(
      this.project.description[0].text
    );
  }

  private getShortDescription(
    description: string,
    limit: number = 250
  ): string {
    return description.length > limit
      ? description.slice(0, limit) + '...'
      : description;
  }
}
