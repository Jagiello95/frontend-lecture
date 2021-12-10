import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  redirect(num: number) {
    switch(num) {
      case 0:
        this.router.navigate(['intro', 'about']);
        break;
      case 1:
        this.router.navigate(['architecture', 'main']);
        break;
      case 2:
        this.router.navigate(['html', 'main']);
        break;
      case 3:
        this.router.navigate(['css', 'main']);
        break;
      case 4:
        this.router.navigate(['js', 'main']);
        break;
      case 5:
        this.router.navigate(['mistakes', 'main']);
        break;
      case 6:
        this.router.navigate(['outro', 'advice']);
        break;
    }

  }

}
