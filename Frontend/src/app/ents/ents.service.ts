import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntsService {

  private url = 'http://localhost:5000/api/ents';
  constructor(private http: HttpClient){ }

  getEnts() {
    return this.http.get(this.url);
  }
}
