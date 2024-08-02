import { Component, Input, OnInit } from '@angular/core';
import { TournamentInterface } from '../../interfaces/tournament-interface';

@Component({
  selector: 'app-tournament',
  standalone: true,
  imports: [],
  templateUrl: './tournament.component.html',
  styleUrl: './tournament.component.scss'
})
export class TournamentComponent implements OnInit {

  @Input() tournament: TournamentInterface = {} as TournamentInterface;
  ngOnInit(): void {
    console.log('Team component initialized with team:', this.tournament);
  }
}
