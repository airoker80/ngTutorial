import {Component, OnInit} from '@angular/core';
import {HeroModel} from './HeroModel';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  title = 'Hero';

  hero: HeroModel[];

  selectedHero: HeroModel;


  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(hero => this.hero = hero);
  }

}
