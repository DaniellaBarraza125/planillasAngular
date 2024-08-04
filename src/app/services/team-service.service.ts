import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamInterface } from '../interfaces/team-interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = 'http://localhost:8080/teams';

  constructor(private http: HttpClient) { }

  createTeam(team: TeamInterface): Observable<any> {
    return this.http.post(this.apiUrl, team);
  }

  getTeams(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getTeamById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  deleteTeam(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
