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
  otherStepHovered: boolean = false;
  anyStepClicked: boolean = false;
  hasExitedOnce: boolean = false;
  constructor(private service: StepsService) {}

  ngOnInit(): void {
    this.stepsList$.subscribe(() => {});
  }

  onStepClick(i: number): void {
    if (this.openStepId === i) {
      this.openStepId = null;
      this.anyStepClicked = false;
    } else {
      this.openStepId = i;
      this.anyStepClicked = true;
    }
    this.hasExitedOnce = true;
  }

  onStepHover(): void {
    this.otherStepHovered = true;
  }

  onStepLeave(): void {
    this.otherStepHovered = false;
  }

  onContainerLeave(): void {
    this.otherStepHovered = false;
    this.openStepId = null;
    this.hasExitedOnce = true;
  }
}
