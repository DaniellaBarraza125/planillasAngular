import { Component, Input } from '@angular/core';
import { PlayerInterface } from '../../interfaces/player-interface';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';


interface Column {
    field: string;
    header: string;
}

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss'
})
export class PlayersComponent {
  @Input() players?: PlayerInterface[] = [];
  
  cols: Column[] = [
    { field: 'name', header: 'Name' },
    { field: 'city', header: 'City' },
    { field: 'number', header: 'Number' },  
  ];
  
  ngOnInit(): void {
    console.log('Players:', this.players);

  }
}
