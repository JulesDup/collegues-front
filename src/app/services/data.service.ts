import { Injectable } from '@angular/core';
import { Collegue } from '../models/collegue';
import { collegues_mock, listCollegues_mock } from '../mock/collegues.mock';
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

  rechercherParNom(nom: string): Observable<string[]> {
    this.listColleguesRecherche = new Map(); //pour effacer ancienne recherche
    //TODO retourner une liste de matricules fictifs à partir du fichier `src/app/mock/matricules.mock.ts`.
    return this.http.get<string[]>(`https://collegues.herokuapp.com/collegues/?nom=` + nom);

  }
  recupererCollegueCourant(matricule: string) {
    // TODO retourner le collègue fictif à partir du fichier  `src/app/mock/collegues.mock.ts`.
    this.http.get<Collegue>(`https://collegues.herokuapp.com/collegues/` + matricule).subscribe(collegue => {
      this.transfertCollegue.next(collegue);
    });
  }
}
