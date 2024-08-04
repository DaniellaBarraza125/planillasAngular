import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team-service.service';
import { CommonModule } from '@angular/common';
import { TeamInterface } from '../../interfaces/team-interface';
import { ActivatedRoute } from '@angular/router';
import { CreatePlayerComponent } from "../create-player/create-player.component";
import { PlayersComponent } from "../players/players.component";

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [CommonModule, CreatePlayerComponent, PlayersComponent],
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.scss'
})
export class TeamDetailComponent  implements OnInit {
  
  team: TeamInterface = {} as TeamInterface;

  constructor(private route: ActivatedRoute, private teamService: TeamService) {
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('_id');
    if (id) {
      this.teamService.getTeamById(id).subscribe({
        next: (data) => {
          this.team = data.team;
          console.log(this.team)
        },
        error: (error) => {
          console.error('Error fetching team details:', error);
        }
      });
    }}
    
  }


