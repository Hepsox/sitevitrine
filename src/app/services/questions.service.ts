import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/questions.types';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private http: HttpClient) {}
  private _BASE_URL = 'assets/questions.json';

  getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this._BASE_URL);
  }
}
