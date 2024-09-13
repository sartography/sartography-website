import { Component } from '@angular/core';
import {isEven} from '../util';
import {NgIf} from '@angular/common';
import {InlineSVGModule} from 'ng-inline-svg-2';

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
}
