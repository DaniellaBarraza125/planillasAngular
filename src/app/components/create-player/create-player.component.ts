import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ToastModule } from 'primeng/toast';
import { PlayerInterface } from '../../interfaces/player-interface';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-create-player',
  standalone: true,
  imports: [FloatLabelModule, ButtonModule, ToastModule, ChipsModule, FormsModule, InputGroupModule,InputNumberModule, InputGroupAddonModule],
  templateUrl: './create-player.component.html',
  styleUrl: './create-player.component.scss'
})
export class CreatePlayerComponent {
  formData: PlayerInterface = {
    name: '',
    city: '',
    number: 0,
    team: '',
  };
}
