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
