import { Component, OnInit } from '@angular/core';
import { Collegue } from './models/collegue';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  unObjetCollegueFourni: Collegue;


  constructor(private dtService: DataService) { }

  ngOnInit(): void {
    // this.unObjetCollegueFourni = this.dtService.recupererCollegueCourant();
  }


}
