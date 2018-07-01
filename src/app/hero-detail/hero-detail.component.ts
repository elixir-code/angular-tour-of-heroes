import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  
  // input property (preceded by @Input decorator)
  @Input() hero: Hero;

  constructor(
  		private route: ActivatedRoute,
  		private heroService: HeroService,
  		private location: Location
  	) { }

  ngOnInit() {
    
    /*const id = +(this.route.snapshot.paramMap.get('id'));
    
    // POST quickaction data to MyWIPRO Portal
    let quickaction_data = {
      quickaction: {
        appid: 'Tour-of-Heroes',
        subappid: `hero-detail/${id}`
      }
    };

    parent.postMessage(quickaction_data, 'http://localhost:4201');*/

  	this.getHero();
  }

  getHero(): void {
  	const id = +(this.route.snapshot.paramMap.get('id'));
  	this.heroService.getHero(id)
  	.subscribe(hero => this.hero = hero);
  }

  goBack(): void {
  	this.location.back();
  }
}
