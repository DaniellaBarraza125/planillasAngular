import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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
  @Input() teams: TeamInterface[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams() {
    this.teamService.getTeams().subscribe({
      next: (data) => {
        this.teams = data.teams;

      },
      error: (error) => {
        console.log('error', error);
      }
    });
  }


  onDeletedTeam(teamId: string) {
    this.teams = this.teams.filter(t => t._id !== teamId);
  }
  onTeamCreated(newTeam: TeamInterface) {
    this.teams.push(newTeam);
  }
}
