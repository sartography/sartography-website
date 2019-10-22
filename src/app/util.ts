import {ElementRef} from '@angular/core';

export const isEven = (i: number, ifTrue?: string, ifFalse?: string): string | boolean => {
  const test = i % 2 === 0;
  if (ifTrue && ifFalse) {
    return test ? ifTrue : ifFalse;
  } else {
    return test;
  }
};

export const getScrollState = (el: ElementRef): string => {
  const hOffset = window.innerHeight * 0.75;
  const nativeEl: HTMLElement = el.nativeElement;
  const componentPosition = nativeEl.offsetTop;
  const scrollPosition = window.pageYOffset + hOffset;
  return scrollPosition >= componentPosition ? 'show' : 'hide';
}
