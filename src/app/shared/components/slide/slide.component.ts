import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  @Input() color = 'white';
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'background', this.color)
  }

}
