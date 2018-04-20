import { Injectable } from '@angular/core';
import { HeroModel } from './heroes/HeroModel';
import { HEROS } from './heroes/mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(public messageService : MessageService) { }

  getHeroes(): Observable<HeroModel[]> {
    this.messageService.add('Hero Details Fetched');
    return of(HEROS);
  }

}
