import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CaseStudy } from '../interfaces';
import { isEven } from '../util';
import {animations} from '../animation';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss'],
  animations: animations
})
export class CaseStudiesComponent implements OnInit {
  caseStudies: CaseStudy[];
  selectedStudy: CaseStudy;
  selectedStudyId: string;
  isExpanded = false;
  isEven = isEven;
  bgClasses = [
    'bg-primary',
    'bg-primary-dark-1',
    'bg-primary-dark-2',
    'bg-primary-dark-3',
    'bg-primary-dark-4',
  ];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getCaseStudies().subscribe(studies => {
      this.caseStudies = studies;
    });
  }

  toggleExpanded(studyId: string) {
    if (this.selectedStudyId !== studyId) {
      this.selectedStudyId = studyId;
      this.selectedStudy = this.caseStudies.find(c => c.id === this.selectedStudyId);
      this.isExpanded = true;
    } else {
      this.isExpanded = !this.isExpanded;
    }
  }

  getColumnSize(c: CaseStudy): string {
    let colSize: number;

    if (this.isExpanded) {
      if (this.selectedStudyId === c.id) {
        colSize = 60;
      } else {
        colSize = 40 / (this.caseStudies.length - 1);
      }
    } else {
      colSize = 100 / (this.caseStudies.length);
    }
    return `${colSize}%`;
  }

  openDialog(url) {
    console.log('url', url);
  }

  tallestHeight(): string {
    let tallest = 0;
    const elems = document.getElementsByClassName('case-study-details');
    for (let i = 0; i < elems.length; i++) {
      const e = elems.item(i);
      if (e.clientHeight > tallest) { tallest = e.clientHeight; }
    }

    return `${tallest}px`;
  }
}
