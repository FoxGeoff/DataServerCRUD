import { Injectable } from '@angular/core';
//
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private http: HttpClient,
     /* private messageService: MessageService */) { }

  /* Old function for mock heros
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  */

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }


}
