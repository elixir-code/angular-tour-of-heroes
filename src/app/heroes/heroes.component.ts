import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[];

  constructor(private heroService: HeroService) { 
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe( heroes => {this.heroes = heroes} );
  }

  ngOnInit() {

    // POST quicklinks data to MyWIPRO Portal
    let quicklinks_data = {
      quicklinks: {
        appid: 'Tour-of-Heroes',
        subappid: 'heroes'
      }
    };

    parent.postMessage(quicklinks_data, 'http://localhost:4201');

    this.getHeroes();
  }

}