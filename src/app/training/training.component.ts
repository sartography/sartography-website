import { Component } from '@angular/core';
import {isEven} from '../util';
import {NgIf} from '@angular/common';
import {InlineSVGModule} from 'ng-inline-svg-2';

declare var hbspt: any

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [
    NgIf,
    InlineSVGModule
  ],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent {

  protected readonly isEven = isEven;


  ngAfterContentInit() {
    hbspt.forms.create({
      region: "na1",
      portalId: "42562038",
      formId: "86fbeaf0-3ec2-4827-9555-5002d57bdce3",
      target: "#hubspotForm"
    });
  }
}
