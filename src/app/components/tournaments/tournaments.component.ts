import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CreateTournamentComponent } from "../create-tournament/create-tournament.component";
import { DataViewModule } from 'primeng/dataview';
import { TournamentComponent } from '../tournament/tournament.component';
import { TournamentService } from '../../services/tournament-service.service';

import { TournamentInterface } from '../../interfaces/tournament-interface';



@Component({
  selector: 'app-tournaments',
  standalone: true,
  imports: [CommonModule, CreateTournamentComponent,DataViewModule, TournamentComponent],
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.scss',
  providers: []

})
export class TournamentsComponent  implements OnInit{
  public tournaments: Array<TournamentInterface> = [];

  constructor(private tournamentService: TournamentService) {}

  ngOnInit(): void {
    this.getTournaments();
  }
  getTournaments() {
    this.tournamentService.getTournaments().subscribe({
      next: (data) => {
        this.tournaments = data.tournaments;
      },
      error: (error) => {
        console.log('error', error);
      }
    });
  }
  onTournamentCreated(newTournament: TournamentInterface) {
    this.tournaments.push(newTournament);
  }
  onDeletedTournament(tournamentId: string) {

    this.tournaments = this.tournaments.filter(t => t._id !== tournamentId);
  }
}
