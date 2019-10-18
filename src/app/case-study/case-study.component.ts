import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {getScrollState, isEven} from '../util';
import {animations} from '../animation';
import {CaseStudy} from '../interfaces';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss'],
  animations: animations
})
export class CaseStudyComponent implements OnInit {
  state = 'hide';
  @Input() caseStudy: CaseStudy;
  @Input() isExpanded: boolean;
  @Input() index: number;

  isEven = isEven;

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.state = getScrollState(this.el);
  }
}
