import { Component } from '@angular/core';
import { TournamentComponent } from '../tournament/tournament.component';
import { TournamentsComponent } from '../tournaments/tournaments.component';
import { TournamentInterface } from '../../interfaces/tournament-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tournament-detail',
  standalone: true,
  imports: [TournamentComponent, CommonModule],
  templateUrl: './tournament-detail.component.html',
  styleUrl: './tournament-detail.component.scss'
})
export class TournamentDetailComponent {
  tournament: TournamentInterface = {} as TournamentInterface;
  isLoading = true;

}
