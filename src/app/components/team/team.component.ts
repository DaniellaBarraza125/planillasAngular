import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TeamInterface } from '../../interfaces/team-interface';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, CardModule ],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() team: TeamInterface = {} as TeamInterface;

  ngOnInit(): void {
    console.log('Team component initialized with team:', this.team);
  }
}
