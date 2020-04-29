import { Component, OnInit } from '@angular/core';
import SaisieDeCollegue from '../models/SaisieDeCollegue';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-collegue',
  templateUrl: './app-form-collegue.component.html',
  styleUrls: ['./app-form-collegue.component.css']
})
export class AppFormCollegueComponent implements OnInit {
  public saisieDeCollegue: SaisieDeCollegue = {};
  messageValisation: string = "Collegue enregistré "


  constructor(private dtService: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  addCollegue() {

    //verification si donnée vide ou non (controle en plus du HTML)
    if (this.saisieDeCollegue.nom && this.saisieDeCollegue.prenoms && this.saisieDeCollegue.dateDeNaissance
      && this.saisieDeCollegue.email.match('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]')
      && this.saisieDeCollegue.photoUrl && this.saisieDeCollegue.photoUrl.length >= 7) {
      this.dtService.postCollegue(this.saisieDeCollegue).subscribe(() => { }, error => console.log(error)
      );
    }
    setTimeout(() => {
      window.location.reload();
    }, 2000)
  }
}
