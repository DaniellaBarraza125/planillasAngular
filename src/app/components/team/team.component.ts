import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TeamInterface } from '../../interfaces/team-interface';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { TeamService } from '../../services/team-service.service';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, CardModule, RouterModule, ConfirmDialogModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  providers: [ConfirmationService]
})
export class TeamComponent   {
  @Input() team: TeamInterface = {} as TeamInterface;
  @Output() deletedTeam = new EventEmitter<string>();
  constructor(private teamService: TeamService,
    private confirmationService: ConfirmationService 
  )  { }
  
  confirmDelete() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this team?',
      header: 'Confirm',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.deleteTeam();
      },
      reject: () => {
        console.log('Deletion cancelled');
      }
    });
  }
 
  deleteTeam(): void {
  if(!this.team._id){
    console.error('Team ID is missing');
    return;
  }
  this.teamService.deleteTeam(this.team._id).subscribe({
    next: (data) => {
      console.log('Team deleted:', data);
      this.deletedTeam.emit(this.team._id);
    },error: (error) => {
      console.error('Error deleting team:', error);
    }
  })}
  editTeam(): void {
    console.log('Edit team:', this.team);
  }
  
  }

