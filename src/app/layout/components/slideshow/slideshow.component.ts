import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { take } from 'rxjs/operators'
import { ChipComponent } from 'src/app/shared/components/chip/chip.component';
import { slideInOutAnimation } from '../../route-transition-animations';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
  animations: [
    slideInOutAnimation
  ]
})
export class SlideshowComponent implements OnInit {
  public routes!: string[];
  public currentRoute!: number;
  public mainRoute!: string;
  constructor(private readonly route: ActivatedRoute, private readonly router: Router) { }

  ngOnInit(): void {
    
    this.route.data.pipe(
      take(1)
    )
    .subscribe(data => {
      this.mainRoute = data.mainRoute;
      this.routes = data?.routes;
      const segments = this.router.url.split('/');
      this.currentRoute = this.routes.findIndex((route) => route === segments[segments.length - 1]);
    });
  }

  public get firstRoute() {
    return this.currentRoute > 0
  }

  public get lastRoute() {
    return this.currentRoute < this.routes.length - 1
  }

  public prev() {
    if (this.firstRoute) {
      ChipComponent.index = 0;
      this.router.navigate([this.mainRoute, `${this.routes[this.currentRoute - 1]}`]);
      this.currentRoute--;
    }
  }

  public next() {
    if (this.lastRoute) {
      ChipComponent.index = 0;
      this.router.navigate([this.mainRoute, `${this.routes[this.currentRoute + 1]}`]);
      this.currentRoute++;
    }
  }

  public onRouteChange(route:number) {
    this.currentRoute = route
  }

  
  public prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }


}
