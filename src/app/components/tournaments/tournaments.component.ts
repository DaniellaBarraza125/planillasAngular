import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-tournaments',
  standalone: true,
  imports: [ToastModule, ButtonModule, RippleModule],
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.scss',
  providers: [MessageService]
})
export class TournamentsComponent {
  constructor(private messageService: MessageService) {}
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
}
}
