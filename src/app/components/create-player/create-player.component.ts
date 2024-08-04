import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { PlayerInterface } from '../../interfaces/player-interface';
import { PlayerService } from '../../services/player-service.service';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-player',
  standalone: true,
  imports: [FloatLabelModule, ButtonModule, ToastModule, ChipsModule, FormsModule, InputGroupModule, InputNumberModule, InputGroupAddonModule, RouterModule, CommonModule],
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss'],
  providers: [MessageService]
})
export class CreatePlayerComponent implements OnInit {
  @Input() players: PlayerInterface[] = [];
  @Output() playerCreated = new EventEmitter<PlayerInterface>();
  formData: PlayerInterface = {
    name: '',
    city: '',
    number: 0,
    team: ''
  };

  teamId: string | null = null; 

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.teamId = this.route.snapshot.paramMap.get('_id');
 
  }

  createPlayer() {
    if (!this.teamId) {
      console.error('Team ID is not available');
      return;
    }

    const player: PlayerInterface = {
      name: this.formData.name,
      city: this.formData.city,
      number: this.formData.number,
      team: this.teamId
    };

    this.playerService.createPlayer(player, this.teamId).subscribe(
      response => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: `${response.msg} ${player.name}` })
        this.playerCreated.emit(player);
        this.resetForm();
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.msg });
      }
    );
  }
  resetForm() {
    this.formData = {
      name: '',
      city: '',
      number: 0,
      team: ''
    };
  }
}
