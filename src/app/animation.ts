import {
  animation,
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query
} from "@angular/animations";
import { EasingLogic } from 'ngx-page-scroll-core';

export const fadeOut = animation(
  [
    style({ opacity: "{{ start }}", zIndex: "{{zIndex}}" }),
    animate("{{ time }}", style({ opacity: "{{ end }}" }))
  ],
  { params: { time: "1000ms", start: 0, end: 1, zIndex: 0 } }
);

export const fadeIn = animation(
  [
    style({ opacity: "{{ start }}", zIndex: "{{zIndex}}" }),
    animate("{{ time }}", style({ opacity: "{{ end }}" }))
  ],
  { params: { time: "1000ms", start: 1, end: 0, zIndex: 0 } }
);

export const easingFn: EasingLogic = (t: number, b: number, c: number, d: number): number => {
  return ((t/=d/2) < 1) ? ((c/2)*t*t*t*t+b) : (-c/2)*((t-=2)*t*t*t-2)+b;
};
