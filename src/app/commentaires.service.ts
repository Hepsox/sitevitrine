import { Injectable } from '@angular/core';
import { Commentaire } from './commentaire.types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommentairesService {
  constructor(private http: HttpClient) {}
  private _BASE_URL = 'assets/commentaires.json';

  getAllCommentaires(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(this._BASE_URL);
  }
}
