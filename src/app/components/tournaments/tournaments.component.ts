import { Component, OnInit } from '@angular/core';
import { CreateTournamentComponent } from "../create-tournament/create-tournament.component";
import { DataViewModule } from 'primeng/dataview';
import { TournamentComponent } from '../tournament/tournament.component';
import { TournamentService } from '../../services/tournament-service.service';



@Component({
  selector: 'app-tournaments',
  standalone: true,
  imports: [CreateTournamentComponent,DataViewModule, TournamentComponent],
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.scss',
  providers: []

})
export class TournamentsComponent  implements OnInit{
  public tournaments: Array<TournamentService> = [];

  constructor(private tournamentService: TournamentService) {}

  ngOnInit(): void {
    this.getTournaments();
  }
  getTournaments() {
    this.tournamentService.getTournaments().subscribe({
      next: (data) => {
        this.tournaments = data.teams;
        console.log('Tournaments data received:', this.tournaments);
      },
      error: (error) => {
        console.log('error', error);
      }
    });
  }

  
}
