import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {
  public static index: number = 0;
  @Input() label!: string;
  @Input() background!: string;
  @Input() color: string = 'white';
  @Input() icon!: string;
  @Input() index!: number;
  @Input() animation: string = 'fadeInRight';
  constructor(private renderer: Renderer2, private el: ElementRef) {
    ChipComponent.index++;
    this.index = ChipComponent.index;
   }

  ngOnInit(): void {

    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.background);
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    this.renderer.setStyle(this.el.nativeElement, 'animation-delay', `0.${this.index - 1}s`);
    this.renderer.addClass(this.el.nativeElement, 'animate__animated')
    this.renderer.addClass(this.el.nativeElement, `animate__${this.animation}`)
  }

}
