import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team-service.service';
import { CommonModule } from '@angular/common';
import { TeamInterface } from '../../interfaces/team-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.scss'
})
export class TeamDetailComponent  implements OnInit {

  team: TeamInterface | null = null;

  constructor(private route: ActivatedRoute, private teamService: TeamService) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('_id');
    if (id) {
      this.teamService.getTeamById(id).subscribe({
        next: (data) => {
          this.team = data.team;
        },
        error: (error) => {
          console.error('Error fetching team details:', error);
        }
      });
    }}
}


