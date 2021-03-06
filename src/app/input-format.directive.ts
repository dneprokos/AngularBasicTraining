import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('format') format;
  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus(){
    
  }
  @HostListener('blur') onBlur(){
    let value: string = this.el.nativeElement.value;
    if (this.format == 'lowercase')
      this.el.nativeElement.value = value.toLocaleLowerCase();
    else
    this.el.nativeElement.value = value.toUpperCase();
  }

  

}
