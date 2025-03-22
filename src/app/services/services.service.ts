import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../models/service.types';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}
  private _BASE_URL = 'assets/data/services.json';

  getAllServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this._BASE_URL);
  }
}
