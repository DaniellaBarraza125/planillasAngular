import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { TournamentService } from '../../services/tournament-service.service';
import { TournamentInterface } from '../../interfaces/tournament-interface';
import { MessageService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-create-tournament',
  standalone: true,
  imports: [ToastModule, FloatLabelModule,FormsModule,CalendarModule,InputGroupModule,InputGroupAddonModule, ButtonModule, ChipsModule],
  templateUrl: './create-tournament.component.html',
  styleUrl: './create-tournament.component.scss',
  providers: [MessageService]
})
export class CreateTournamentComponent {
  @Output() tournamentCreated = new EventEmitter<TournamentInterface>();

  formData: TournamentInterface = {
    name: '',
    place: '', 
    date: ''
  };
  constructor(private tournamentService:TournamentService,private messageService: MessageService) {}
createTournament() {
    const tournament: TournamentInterface = {
      name: this.formData.name,
      place: this.formData.place,
      date: this.formData.date
    };
    this.tournamentService.createTournament(tournament).subscribe(
      response => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: `${response.msg} ${tournament.name}` })
        this.tournamentCreated.emit(tournament)
        this.resetform()
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.msg });
      }
    );
  }
  resetform(){
    this.formData = {
      name: '',
      place: '',
      date: ''
    };
  }
}
