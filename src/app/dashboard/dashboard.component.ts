import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    
    let quickaction_data = {
      quickaction: {
        appid: 'Tour-of-Heroes',
        subappid: 'dashboard'
      }
    };

    parent.postMessage(quickaction_data, 'http://localhost:4201');
    
  	this.getHeroes();
  }

  getHeroes(): void {
  	this.heroService.getHeroes()
  	.subscribe(heroes => this.heroes = heroes.slice(0, 4));
  }
}
