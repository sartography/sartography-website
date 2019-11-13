import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {animations} from '../animation';
import {getScrollState} from '../util';
import {BrandValue} from '../interfaces';

@Component({
  selector: 'app-brand-value',
  templateUrl: './brand-value.component.html',
  styleUrls: ['./brand-value.component.scss'],
  animations: animations
})
export class BrandValueComponent implements OnInit {
  @Input() brandValue: BrandValue;
  state = 'hide';

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  highlight(elementId: string, on: boolean) {
    const svgEl = document.getElementById(elementId)

    if (svgEl) {
      if (on) {
        svgEl.classList.add('highlight');
      } else {
        svgEl.classList.remove('highlight');
      }
    }
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.state = getScrollState(this.el);
  }
}
