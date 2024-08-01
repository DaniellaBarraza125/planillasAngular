import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { TeamComponent } from './components/team/team.component';
import { CreateTeamComponent } from './components/create-team/create-team.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'tournaments', component: TournamentsComponent},
    {path: "teams", component: TeamComponent},
    {path: 'teams/create', component: CreateTeamComponent}
];
