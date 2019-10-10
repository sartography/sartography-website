import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../interfaces';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teamMembers: TeamMember[];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getTeamMembers().subscribe(team => {
      this.teamMembers = team;
    });
  }
}
