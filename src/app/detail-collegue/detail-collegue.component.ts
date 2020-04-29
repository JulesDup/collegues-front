import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Collegue } from 'src/app/models/Collegue';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.css']
})
export class DetailCollegueComponent implements OnInit {

  collegueRecupere: Collegue;

  constructor(private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit(): void {

    // Récupérer ID passé dans l'url
    const id = this.route.snapshot.params['id'];


    this.dataService.recupererCollegueCourant(id);
    this.dataService.getleTransfertCollegue()
      .subscribe(collegueSelect => {
        this.collegueRecupere = collegueSelect;
      });

  }

}
