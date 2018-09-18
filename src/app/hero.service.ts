import { Injectable } from '@angular/core';
//
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService ) { }

  /* Old function for mock heros
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  */

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');

    return this.http.get<Hero[]>(this.heroesUrl)
  }

}
