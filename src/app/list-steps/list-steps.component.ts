import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StepsService } from '../services/steps.service';
import { Step } from '../models/step.types';

@Component({
  selector: 'app-list-steps',
  templateUrl: './list-steps.component.html',
  styleUrls: ['./list-steps.component.css'],
})
export class ListStepsComponent {
  stepsList$: Observable<Step[]> = this.service.getAllSteps();
  openStepId: number | null = null;
  hoverPristine: boolean = true;

  onCardClick(i: number) {
    if (i === this.openStepId) {
      this.openStepId = null;
    } else {
      this.openStepId = i;
    }
  }

  constructor(private service: StepsService) {}
}
