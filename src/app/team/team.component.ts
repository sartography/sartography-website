import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import { TeamMember } from '../interfaces';
import { ApiService } from '../api.service';
import {getScrollState, isEven} from '../util';
import {animations} from '../animation';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  animations: animations
})
export class TeamComponent implements OnInit {
  teamMembers: TeamMember[];
  isEven = isEven;
  state = 'hide';

  constructor(
    private api: ApiService,
    public el: ElementRef
  ) { }

  ngOnInit() {
    this.api.getTeamMembers().subscribe(team => {
      this.teamMembers = team;
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.state = getScrollState(this.el);
  }
}
