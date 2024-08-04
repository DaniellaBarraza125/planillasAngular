import { Component } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { FormDataInterface } from '../../interfaces/form-data-interface';
import { TeamService } from '../../services/team-service.service'; 
import { TeamInterface } from '../../interfaces/team-interface';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-create-team',
  standalone: true,
  imports: [FloatLabelModule, ButtonModule, ToastModule, ChipsModule, FormsModule, InputGroupModule, InputGroupAddonModule],
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss'],
  providers: [MessageService]
})
export class CreateTeamComponent  {


  formData: FormDataInterface = {
    name: '',
    city: ''
  };

  constructor(
    private teamService: TeamService, 
    private messageService: MessageService
  ) {}

  createTeam() {
    const team: TeamInterface = {
      
      name: this.formData.name,
      city: this.formData.city
      
    };

    this.teamService.createTeam(team).subscribe(
      response => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: `${response.msg} ${team.name}` });


      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.msg });
      }
    );
  }

}
