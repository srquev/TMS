// import { Directive, ElementRef, HostListener, Input } from '@angular/core';

import { Directive, ElementRef, HostListener, Input } from "@angular/core";

// @Directive({
//   selector: '[appHighlight]'
// })
// export class HighlightDirective {
//   @Input() appHighlight:string = '';

//   constructor(private el: ElementRef) { }

//   @HostListener('mouseenter') onHover() {
//     this.highlight(this.appHighlight,'mouseEnter');
//   }

//   @HostListener('mouseleave') onMouseLeave() {
//     this.highlight('','mouseLeave');
//   }

//   private highlight(color: string, eventype:string) {
//     this.el.nativeElement.style.backgroundColor = color;
//     eventype === 'mouseEnter' ? this.el.nativeElement.style.color = 'white' : this.el.nativeElement.style.color = ''
//   }

// }



@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  @Input() appHighlight:string = '';
  constructor(public el : ElementRef){}

  @HostListener('mouseenter') onHover(){
    this.highlight(this.appHighlight,'mouseenter')
  }

  @HostListener('mouseleave') onLeave(){
    this.highlight('','mouseleave')
  }

  highlight(color: string, eventype:string){
    this.el.nativeElement.style.backgroundColor = color;
    eventype === 'mouseenter' ? this.el.nativeElement.style.color = '#FFF' : this.el.nativeElement.style.color = '#000'
  }
}
