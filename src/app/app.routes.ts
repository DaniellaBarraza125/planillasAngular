import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TournamentDetailComponent } from './components/tournament-detail/tournament-detail.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'tournaments', component: TournamentsComponent},
    {path: 'tournament/:id', component: TournamentDetailComponent},
    {path: "teams", component: TeamsComponent},
    { path: 'teams', component: TeamsComponent },
    { path: 'teams/:_id', component: TeamDetailComponent },
    { path: '', redirectTo: '/teams', pathMatch: 'full' }
];
