import { Component } from '@angular/core';
import { CreateTournamentComponent } from "../create-tournament/create-tournament.component";



@Component({
  selector: 'app-tournaments',
  standalone: true,
  imports: [CreateTournamentComponent],
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.scss',
  providers: []

})
export class TournamentsComponent {

  
}
