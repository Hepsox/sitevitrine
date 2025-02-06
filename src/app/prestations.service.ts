import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestation } from './prestation.types';

@Injectable({
  providedIn: 'root',
})
export class PrestationsService {
  constructor(private http: HttpClient) {}
  private _BASE_URL = 'assets/prestations.json';

  getAllPrestations(): Observable<Prestation[]> {
    return this.http.get<Prestation[]>(this._BASE_URL);
  }
}
