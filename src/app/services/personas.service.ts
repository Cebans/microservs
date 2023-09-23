import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private apiUrl = 'http://localhost/users_admin_moviles/api/api.php';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPersona(persona: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, JSON.stringify(persona), { headers });
  }
  updatePersona(persona: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.apiUrl}/${persona.id}`;
    return this.http.put(url, JSON.stringify(persona), { headers });
  }

  deletePersona(id: number) {
    const url = `${this.apiUrl}/${id}`; 
    return this.http.delete(url);
  }
}
  