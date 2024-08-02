import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';


@Component({
  selector: 'app-team',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  @Input() team: any;

}
