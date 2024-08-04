import { Component, Input, OnInit } from '@angular/core';
import { TournamentInterface } from '../../interfaces/tournament-interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tournament',
  standalone: true,
  imports: [],
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
  providers: [DatePipe]
})
export class TournamentComponent implements OnInit {

  @Input() tournament: TournamentInterface = {} as TournamentInterface;
  formattedDate: string = '';

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    console.log('Team component initialized with team:', this.tournament);
    this.formattedDate = this.datePipe.transform(this.tournament.date, 'mediumDate')!;
  }
}
