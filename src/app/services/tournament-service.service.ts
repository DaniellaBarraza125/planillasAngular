import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TournamentInterface } from '../interfaces/tournament-interface';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  private apiUrl = 'http://localhost:8080/tournaments';

  constructor(private http: HttpClient) { }

  createTournament(tournament: TournamentInterface): Observable<any> {
    return this.http.post(this.apiUrl, tournament);
  }

  getTournaments(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  deleteTournament(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}