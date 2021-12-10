import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ChipComponent } from 'src/app/shared/components/chip/chip.component';

enum NavigationSections {
  intro,
  architecture,
  html,
  css,
  js
}
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public navigationSections = NavigationSections;
  public control = new FormControl(0)
  public options = [
    {
      value: NavigationSections.intro,
      label: 'Intro'
    },
    {
      value: NavigationSections.architecture,
      label: 'Architecture'
    },
    {
      value: NavigationSections.html,
      label: 'HTML'
    },
    {
      value: NavigationSections.css,
      label: 'CSS'
    },
    {
      value: NavigationSections.js,
      label: 'JS'
    }
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    switch(window.location?.pathname.split("/")?.[1]) {
      case 'intro':
        this.control.setValue(0);
        break;
      case 'architecture': 
        this.control.setValue(1);
        break;
      case 'html':
        this.control.setValue(2);
        break;
      case 'css':
        this.control.setValue(3);
        break;
      case 'js':
        this.control.setValue(4);
        break;
    }

    this.control.valueChanges.subscribe((res)=> {
      ChipComponent.index = 0;
      switch(res) {
        case NavigationSections.intro:
          this.router.navigate(['intro', 'about']);
          break;
        case NavigationSections.architecture:
          this.router.navigate(['architecture', 'patterns']);
          break;
        case NavigationSections.html:
          this.router.navigate(['html', 'main']);
          break;
        case NavigationSections.css:
          this.router.navigate(['css', 'main']);
          break;
        case NavigationSections.js:
          this.router.navigate(['js', 'main']);
          break;
      }
    })
  }

  redirect(section:NavigationSections) {
    switch(section) {
      case NavigationSections.html: 
        this.router.navigate(['html', 'component'])
        break;
    }
  }

  redirectHome() {
    this.router.navigate(['intro', 'title']);
  }

}
