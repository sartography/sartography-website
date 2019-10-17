import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CaseStudy } from '../interfaces';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss'],
  animations: [
    trigger('activate', [
      state('active', style({
        opacity: 1
      })),
      state('inactive', style({
        opacity: 0.5,
        transform: 'scale(.75)',
      })),
      transition('* <=> *', animate('200ms ease-in')),
    ]),
    trigger('visible', [
      state('*', style({
        opacity: 1,
      })),
      state('void', style({
        opacity: 0,
      })),
      transition('* <=> *', animate('200ms ease-in')),
    ])

  ]
})
export class CaseStudiesComponent implements OnInit {
  caseStudies: CaseStudy[];
  caseStudy: CaseStudy;
  showCase = false;
  selectedStudyId: string;
  isExpanded = false;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getCaseStudies().subscribe(studies => {
      this.caseStudies = studies;
      this.caseStudy = this.caseStudies[0];
    });
  }

  setStudyView(study: CaseStudy) {
    this.showCase = true;
    this.caseStudy = study;
  }

  toggleExpanded(studyId: string) {
    if (this.selectedStudyId !== studyId) {
      this.selectedStudyId = studyId;
      this.isExpanded = true;
    } else {
      this.isExpanded = !this.isExpanded;
    }
  }
}
