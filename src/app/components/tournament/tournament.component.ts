import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TournamentInterface } from '../../interfaces/tournament-interface';
import { CommonModule, DatePipe } from '@angular/common';
import { TournamentService } from '../../services/tournament-service.service';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Router } from 'express';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-tournament',
  standalone: true,
  imports: [CommonModule, ConfirmDialogModule,RouterModule],
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
  providers: [DatePipe,ConfirmationService]
})
export class TournamentComponent implements OnInit {

  @Input() tournament: TournamentInterface = {} as TournamentInterface;
  formattedDate: string = '';
  @Output() deletedTournament = new EventEmitter<string>();

  constructor(
    private datePipe: DatePipe,
    private tournamentService: TournamentService,
    private confirmationService: ConfirmationService 
  ) {}

  ngOnInit(): void {
    this.formattedDate = this.datePipe.transform(this.tournament.date, 'mediumDate') || 'Date not available';
  }
  confirmDelete() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this tournament?',
      header: 'Confirm',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.deleteTournament();
      },
      reject: () => {
        console.log('Deletion cancelled');
      }
    });
  }

  deleteTournament() {
    if (!this.tournament._id) {
      console.error('Tournament ID is missing');
      return;
    }

    this.tournamentService.deleteTournament(this.tournament._id).subscribe({
      next: (data) => {
        console.log('Tournament deleted:', data);
        this.deletedTournament.emit(this.tournament._id);
      },
      error: (error) => {
        console.error('Error deleting tournament:', error);
      }
    });
  }

}
