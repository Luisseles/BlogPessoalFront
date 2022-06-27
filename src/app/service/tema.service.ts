import { Tema } from './../model/Tema';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  getAllTema(): Observable<Tema[]> {
    this.refreshToken()
    return this.http.get<Tema[]>('http://localhost:8080/tema', this.token);
  }

  getByIdTema(id: number): Observable<Tema>{
    this.refreshToken()
    return this.http.get<Tema>(`http://localhost:8080/tema/${id}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema> {
    this.refreshToken()
    return this.http.post<Tema>(
      'http://localhost:8080/tema',
      tema,
      this.token
    );
  }

  putTema(tema: Tema): Observable<Tema> {
    this.refreshToken()
    return this.http.put<Tema>(
      'http://localhost:8080/tema/atualizar',
      tema,
      this.token
    );
  }

  deleteTema(id: number) {
    this.refreshToken()
    return this.http.delete(
      `http://localhost:8080/tema/${id}`,
      this.token
    );
  }

}