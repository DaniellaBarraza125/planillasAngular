import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TeamInterface } from '../../interfaces/team-interface';
import { TeamService } from '../../services/team-service.service';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent implements OnInit {

  ngOnInit(): void {
  }

}
