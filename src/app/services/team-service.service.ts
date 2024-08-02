import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = 'http://localhost:8080/teams'

  constructor(private http: HttpClient) { }

  createTeam():Observable<any>{
    return this.http.post(`${this.apiUrl}`, {});
  }
  getTeams():Observable<any>{
    return this.http.get(this.apiUrl);
  }
}