import { Component, OnInit } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { FormDataInterface } from '../../interfaces/form-data-interface';
import { TeamService } from '../../services/team-service.service'; 
import { TeamInterface } from '../../interfaces/team-interface';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';


@Component({
  selector: 'app-create-team',
  standalone: true,
  imports: [FloatLabelModule, ButtonModule, MessagesModule, ChipsModule, FormsModule, InputGroupModule, InputGroupAddonModule],
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss'],
  providers: []
})
export class CreateTeamComponent implements OnInit {
  messages: Message[] = [];
  ngOnInit() {
    this.messages = [{ severity: 'info', detail: 'Message Content' }];
}

  formData: FormDataInterface = {
    name: '',
    city: ''
  };

  constructor(private teamService: TeamService, 
  ) {}

  createTeam() {
    const team: TeamInterface = {
  
      name: this.formData.name,
      city: this.formData.city
      
    };

    this.teamService.createTeam(team).subscribe(
      response => {
        console.error('Equipo Creado', team)

      },
      error => {
        console.error('Error al crear el equipo:', error)
      }
    );
  }

}
