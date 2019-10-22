import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';
import {animations, fadeIn, fadeOut} from '../animation';
import {getScrollState} from '../util';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: animations
})
export class WelcomeComponent implements OnInit {
  state = 'hide';

  constructor(public el: ElementRef) {}

  ngOnInit() {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.state = getScrollState(this.el);
  }
}
