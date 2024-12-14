import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SegnalazioneRicettaService {
  private apiUrl = `${environment.apiUrl}/utente/gestoreSegnalazioni`;

  constructor(private http: HttpClient) {}

  /**
   * Metodo per ottenere tutte le segnalazioni dal backend
   * @returns Observable contenente un array di segnalazioni
   */
  getSegnalazioni(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Effettua una GET sull'endpoint
  }

  /**
   * Metodo per risolvere una segnalazione tramite una chiamata PATCH
   * @param id ID della segnalazione da risolvere
   * @param motivoBlocco Motivo del blocco
   * @returns Observable con la risposta del backend
   */
  risolviSegnalazione(id: number, motivoBlocco: string): Observable<string> {
    const body = { motivoBlocco };
    return this.http.patch<string>(`${this.apiUrl}/${id}`, body);
  }
}