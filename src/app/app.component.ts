import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor(private router: Router) { }

  ngOnInit() {
  	this.router.events
  		.subscribe((event) => {
  			if (event instanceof NavigationEnd)
  			{	
  				let quicklinks_data = {
					  					quicklinks: {
					  									url: window.location.href
					  								}
  									}

  				//parent.postMessage(this.router.url, '*');
 	 			parent.postMessage(quicklinks_data, '*');
 	 			//parent.postMessage(window.location.href, '*');
 	 			//alert(window.location.href);
  			}
 	 			
  		});
  }

}
