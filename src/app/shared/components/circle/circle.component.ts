import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {
  @Input() label!: string;
  @Input() icon!: string;
  @Input() background!: string;
  @Input() animation!: string;
  @Input() infiniteAnimation!: string;
  @Input() color!: string;
  @Input() unit!: number;
  @Input() delay: number = 0;
  @Input() font: number = 2;
  @Output() onClick = new EventEmitter<void>();
  constructor(public renderer: Renderer2, public el: ElementRef) { }

  @HostListener('click', ['$event.target'])
  onClickBtn(){
      this.onClick.emit();
  }

  @HostListener('mouseenter') onEnter(){
    this.renderer.addClass(this.el.nativeElement, `bigger`)
  }

  @HostListener('mouseleave') onLeave(){
    this.renderer.removeClass(this.el.nativeElement, `bigger`)
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'animation-delay', `0.${this.delay}s`);
    this.renderer.addClass(this.el.nativeElement, 'animate__animated')
    this.renderer.addClass(this.el.nativeElement, `animate__${this.animation}`)
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.background);
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    this.renderer.setStyle(this.el.nativeElement, 'width', `${this.unit}rem`);
    this.renderer.setStyle(this.el.nativeElement, 'height', `${this.unit}rem`);
    this.renderer.setStyle(this.el.nativeElement, 'font-size', `${this.font}rem`);
    // setTimeout(()=> {
    //   if (this.infiniteAnimation) {
    //     this.renderer.removeClass(this.el.nativeElement, `animate__${this.animation}`)
    //     this.renderer.addClass(this.el.nativeElement, `animate__infinite`)
    //     this.renderer.addClass(this.el.nativeElement, `animate__${this.infiniteAnimation}`)
    //     this.renderer.addClass(this.el.nativeElement, 'animate__slow')
    //   }
    // }, 1000)
   



  }

}
