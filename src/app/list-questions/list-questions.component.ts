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
  questionsOuvertes: boolean[] = []; // Tableau pour suivre les réponses ouvertes

  constructor(private service: QuestionsService) {}

  ngOnInit(): void {
    // Initialisation de toutes les réponses à "false" au début
    this.listeQuestions$.subscribe((questions) => {
      this.questionsOuvertes = new Array(questions.length).fill(false);
    });
  }

  toggleReponse(index: number): void {
    // Au clic, on change l'état de la réponse (false <=> true)
    this.questionsOuvertes[index] = !this.questionsOuvertes[index];
  }
}
