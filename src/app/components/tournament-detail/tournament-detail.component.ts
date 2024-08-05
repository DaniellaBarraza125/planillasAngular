import { Component, OnInit } from '@angular/core';
import { TournamentInterface } from '../../interfaces/tournament-interface';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TournamentService } from '../../services/tournament-service.service';
import { TournamentComponent } from '../tournament/tournament.component';
import { TeamsComponent } from '../teams/teams.component';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-tournament-detail',
  standalone: true,
  imports: [TournamentComponent, CommonModule, RouterModule, TeamsComponent,TeamComponent],
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.scss']
})
export class TournamentDetailComponent implements OnInit {

  tournament: TournamentInterface = {} as TournamentInterface;
  teams: any[] = [];
  isLoading = true;

  constructor(private route: ActivatedRoute, private tournamentService: TournamentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getTournament(id);
      }
    });
  }

  getTournament(id: string): void {
    this.tournamentService.getTournamentById(id).subscribe({
      next: (data) => {
        this.tournament = data.tournament;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching tournament details:', error);
        this.isLoading = false;
      }
    });
  }

}
