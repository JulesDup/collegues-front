import { Injectable } from '@angular/core';
import { Collegue } from '../models/collegue';
import SaisieDeCollegue from '../models/SaisieDeCollegue';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private listColleguesRecherche = new Map();
  private transfertCollegue = new Subject<Collegue>();
  constructor(private http: HttpClient) { }


  get leTransfertCollegue() {
    return this.transfertCollegue.asObservable();
  }
  getleTransfertCollegue(): Observable<Collegue> {
    return this.transfertCollegue.asObservable();
  }

  rechercherParNom(nom: string): Observable<string[]> {

    //TODO retourner une liste de matricules fictifs à partir du fichier `src/app/mock/matricules.mock.ts`.
    //Api antoine return this.http.get<string[]>(`https://collegues.herokuapp.com/collegues/?nom=` + nom);
    //Api Rossi
    return this.http.get<string[]>(`https://digicapi.herokuapp.com/collegues?nom=` + nom);
  }
  recupererCollegueCourant(matricule: string) {
    // TODO retourner le collègue fictif à partir du fichier  `src/app/mock/collegues.mock.ts`.
    this.http.get<Collegue>(`https://digicapi.herokuapp.com/collegues/` + matricule).subscribe(collegue => {
      this.transfertCollegue.next(collegue);
    });
  }
  postCollegue(saisieDeCollegue: SaisieDeCollegue): Observable<Collegue> {
    // TODO retourner le collègue fictif à partir du fichier  `src/app/mock/collegues.mock.ts`.
    return this.http.post<Collegue>(`https://digicapi.herokuapp.com/collegues/`, saisieDeCollegue)
      ;
  }
  getAllCollegue(): Observable<Collegue[]> {

    return this.http.get<Collegue[]>(`https://digicapi.herokuapp.com/collegues`);
  }

}
