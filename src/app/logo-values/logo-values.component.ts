import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {BrandValue} from '../interfaces';
import {ApiService} from '../api.service';
import {animations} from '../animation';
import {getScrollState} from '../util';

@Component({
  selector: 'app-logo-values',
  templateUrl: './logo-values.component.html',
  styleUrls: ['./logo-values.component.scss'],
  animations: animations
})
export class LogoValuesComponent implements OnInit {
  brandValuesLeft: BrandValue[];
  brandValuesRight: BrandValue[];
  state = 'hide';

  constructor(
    public el: ElementRef,
    private api: ApiService
  ) {
    this.api.getBrandValues().subscribe(brandValues => {
      const midIndex = Math.floor(brandValues.length / 2);
      this.brandValuesLeft = brandValues.slice(0, midIndex);
      this.brandValuesRight = brandValues.slice(midIndex);
    });
  }

  ngOnInit() {}

  highlight(elementId: string, on: boolean) {
    if (on) {
      document.getElementById(elementId).classList.add('highlight');
    } else {
      document.getElementById(elementId).classList.remove('highlight');
    }
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.state = getScrollState(this.el);
  }
}
