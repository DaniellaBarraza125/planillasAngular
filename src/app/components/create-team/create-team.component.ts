import { Component } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-create-team',
  standalone: true,
  imports: [FloatLabelModule, ButtonModule,ChipsModule,FormsModule, InputGroupModule, InputGroupAddonModule],
  templateUrl: './create-team.component.html',
  styleUrl: './create-team.component.scss'
})
export class CreateTeamComponent {
  formData = {
    username: '',
    city: '',

  };

  createTeam() {
    console.log('Formulario enviado:', this.formData);
  }
}


