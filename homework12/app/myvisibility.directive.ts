import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {

  @Input() isVisible = true;
  //We use Dependency Injection (DI) to inject the renderer into our directives constructor.
  constructor(private el: ElementRef, private renderer: Renderer) {
    // el.nativeElement.style.backgroundColor = "gray"; //The ElementRef gives the directive direct access to the DOM element upon which it’s attached.
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');//Instead of setting the background color directly via the DOM element we do it by going through the renderer.
  }

}
