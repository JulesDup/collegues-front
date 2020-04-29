import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/collegue';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './app-recherche-collegue-par-nom.component.html',
  styleUrls: ['./app-recherche-collegue-par-nom.component.css']
})
export class AppRechercheCollegueParNomComponent implements OnInit, OnDestroy {
  public listCollegues: Collegue[];
  public leCollegue: Collegue;
  public listMatricule: string[];
  public rechercheEnCours: boolean = false;
  private mesError = "Pas de matricule correspondant trouvé";
  subRechercheCollegueParComponent: Subscription;



  constructor(private dtService: DataService) { }


  ngOnInit(): void {

  }

  rechercher(saisiNom: string) {
    this.rechercheEnCours = true;
    this.subRechercheCollegueParComponent = this.dtService.rechercherParNom(saisiNom).subscribe(data => {
      this.listMatricule = data;
    }, error => {
      console.log(`erreur : ${error}`);
    });
  }
  reccupererCollegue(matricule: string) {
    this.dtService.recupererCollegueCourant(matricule);

  }
  masquer() {
    this.rechercheEnCours = false;
  }
  ngOnDestroy() {
    this.subRechercheCollegueParComponent.unsubscribe();
  }
}
