import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { CreateTeamComponent } from './components/create-team/create-team.component';
import { TeamsComponent } from './components/teams/teams.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'tournaments', component: TournamentsComponent},
    {path: "teams", component: TeamsComponent},
    {path: 'teams/create', component: CreateTeamComponent}
];
