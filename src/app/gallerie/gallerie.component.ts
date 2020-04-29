import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { Collegue } from '../models/collegue';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {
  collegue: Collegue;
  listCollegues: Collegue[];
  messageErreur = "erreur subscription gallerie"
  constructor(private dtService: DataService) { }

  ngOnInit(): void {
    this.dtService.getAllCollegue().subscribe(
      (collegues) => {
        this.listCollegues = collegues;
      }, (error) => {
        this.messageErreur = error;
        console.log('Erreur');
      }
    )
  }


}
