import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {getScrollState, isEven} from '../util';
import {Capability} from '../interfaces';
import {animations} from '../animation';

@Component({
  selector: 'app-capability-details',
  templateUrl: './capability-details.component.html',
  styleUrls: ['./capability-details.component.scss'],
  animations: animations
})
export class CapabilityDetailsComponent implements OnInit {
  @Input() capability: Capability;
  @Input() index: number;
  @Input() numTotal: number;
  state = 'hide';
  isEven = isEven;

  constructor(public el: ElementRef) {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.state = getScrollState(this.el);
  }
}
