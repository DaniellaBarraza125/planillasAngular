import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerInterface } from '../interfaces/player-interface';
@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {
  private apiUrl = 'http://localhost:8080/players';

  constructor(private http: HttpClient) { }

  createPlayer(player: PlayerInterface): Observable<any> {
    return this.http.post(this.apiUrl, player);
  }
}
