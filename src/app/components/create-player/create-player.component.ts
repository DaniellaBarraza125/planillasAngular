import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { PlayerService } from '../../services/player-service.service';
import { MessageService } from 'primeng/api';
import { PlayerInterface } from '../../interfaces/player-interface';

@Component({
  selector: 'app-create-player',
  standalone: true,
  imports: [FloatLabelModule, ButtonModule, ToastModule, ChipsModule, FormsModule, InputGroupModule, InputNumberModule, InputGroupAddonModule],
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss'],
  providers: [MessageService]
})
export class CreatePlayerComponent {
  @Input() teamId: string = ''; // Define teamId as an input property

  formData: PlayerInterface = {
    name: '',
    city: '',
    number: 0,
    team: ''  // This will be set to teamId when creating a player
  };

  constructor(
    private playerService: PlayerService,
    private messageService: MessageService
  ) {}

  createPlayer() {
    if (!this.teamId) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Team ID is required' });
      return;
    }

    const player: PlayerInterface = {
      name: this.formData.name,
      city: this.formData.city,
      number: this.formData.number,
      team: this.teamId  // Set the team ID
    };

    // Call createPlayer with both player and teamId
    this.playerService.createPlayer(player, this.teamId).subscribe({
      next: (response) => {
        console.log('Player created successfully:', response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Player created successfully' });
      },
      error: (error) => {
        console.error('Error creating player:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error creating player' });
      }
    });
  }
}
