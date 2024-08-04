import { Component, Input, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-create-player',
  standalone: true,
  imports: [FloatLabelModule, ButtonModule, ToastModule, ChipsModule, FormsModule, InputGroupModule, InputNumberModule, InputGroupAddonModule, RouterModule, CommonModule],
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent implements OnInit {
  @Input() players: PlayerInterface[] = [];
  formData: PlayerInterface = {
    name: '',
    city: '',
    number: 0,
    team: ''
  };

  teamId: string | null = null; // Property to hold the team ID

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.teamId = this.route.snapshot.paramMap.get('_id');
    console.log('Team ID from route:', this.teamId);
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
        console.log('Player created successfully:', response);
      },
      error => {
        console.error('Error creating player:', error);
      }
    );
  }
}
