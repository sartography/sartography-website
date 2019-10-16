import { Component, OnInit } from '@angular/core';
import {BrandValue} from '../interfaces';
import {ApiService} from '../api.service';
import {element} from 'protractor';

@Component({
  selector: 'app-logo-values',
  templateUrl: './logo-values.component.html',
  styleUrls: ['./logo-values.component.scss']
})
export class LogoValuesComponent implements OnInit {
  brandValuesLeft: BrandValue[];
  brandValuesRight: BrandValue[];

  constructor(private api: ApiService) {
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
}
