import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../questions.types';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrl: './list-questions.component.css',
})
export class ListQuestionsComponent {
  listeQuestions$: Observable<Question[]> = this.service.getAllQuestions();

  questionOuverte: number | null = null;

  constructor(private service: QuestionsService) {}

  ngOnInit(): void {
    // Initialisation de toutes les réponses à "false" au début
    this.listeQuestions$.subscribe((questions) => {});
  }
}
