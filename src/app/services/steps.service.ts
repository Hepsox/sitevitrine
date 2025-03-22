import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Step } from '../models/step.types';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  constructor(private http: HttpClient) {}
  private _BASE_URL = 'assets/steps.json';

  getAllSteps(): Observable<Step[]> {
    return this.http.get<Step[]>(this._BASE_URL);
  }
}
