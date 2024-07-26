import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'tournament', component: TournamentsComponent},
];
