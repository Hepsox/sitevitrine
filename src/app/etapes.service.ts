import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etape } from './etape.types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EtapesService {
  constructor(private http: HttpClient) {}
  private _BASE_URL = 'assets/etapes.json';

  getAllEtapes(): Observable<Etape[]> {
    return this.http.get<Etape[]>(this._BASE_URL);
  }
}
