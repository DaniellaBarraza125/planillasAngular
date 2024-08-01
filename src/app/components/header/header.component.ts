import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ MenubarModule, BadgeModule, DropdownModule, AvatarModule, InputTextModule, RippleModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    items: MenuItem[] | undefined;


    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Torneos',
                route: '/tournaments'          
            },
            {
                label: 'Equipos',
                route: '/teams',
                items: [
                    {label: 'Crear', route: '/teams/create'}]
    
        },
        
        ]
        
    }


}
