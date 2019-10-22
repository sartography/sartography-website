import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[scrollSpy]'
})
export class ScrollSpyDirective {
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('window:scroll')
  onScroll() {
    let currentSection: string;
    const midScreenY = window.innerHeight / 2;
    const scrollPosY = window.pageYOffset || document.documentElement.scrollTop;

    for (const section of this.el.nativeElement.children) {
      const hasClass = section.classList.contains('scroll-spy-section');

      if (hasClass && (section.offsetTop <= scrollPosY + midScreenY)) {
        currentSection = section.id;
      }
    }

    if (currentSection !== this.currentSection) {
      console.log('currentSection', currentSection);
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }
}
