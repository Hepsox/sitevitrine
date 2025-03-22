import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/questions.types';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrl: './list-questions.component.css',
})
export class ListQuestionsComponent {
  questionsList$: Observable<Question[]> = this.service.getAllQuestions();

  openQuestionId: number | null = null;

  constructor(private service: QuestionsService) {}

  ngOnInit(): void {
    this.questionsList$.subscribe((questions) => {});
  }
}
