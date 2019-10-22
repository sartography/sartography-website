import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import { TeamMember } from '../interfaces';
import {getScrollState, isEven} from '../util';
import {animations} from '../animation';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss'],
  animations: animations
})
export class TeamMemberComponent implements OnInit {
  @Input() teamMember: TeamMember;
  @Input() index: number;
  isEven = isEven;
  state = 'hide';

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
