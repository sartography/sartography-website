import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {getScrollState} from '../util';
import {animations} from '../animation';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: animations
})
export class FooterComponent implements OnInit {
  state = 'hide';
  today: number = Date.now();
  constructor(
    public el: ElementRef
  ) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.state = getScrollState(this.el);
  }
}
