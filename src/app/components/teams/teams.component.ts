import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TeamInterface } from '../../interfaces/team-interface';
import { TeamService } from '../../services/team-service.service';
import { DataViewModule } from 'primeng/dataview';
import { TeamComponent } from '../team/team.component';
import { RouterLink, RouterModule } from '@angular/router';
import { CreateTeamComponent } from '../create-team/create-team.component';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, DataViewModule, RouterModule, RouterLink, TeamComponent, CreateTeamComponent],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  public teams: Array<TeamInterface> = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams() {
    this.teamService.getTeams().subscribe({
      next: (data) => {
        this.teams = data.teams;
        console.log('Teams data received:', this.teams);
      },
      error: (error) => {
        console.log('error', error);
      }
    });
  }

  onTeamCreated(newTeam: TeamInterface) {
    this.teams.push(newTeam);
  }
}
