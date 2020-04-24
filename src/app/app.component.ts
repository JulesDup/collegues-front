import { Component, OnInit } from '@angular/core';
import { collegues_mock } from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  unObjetCollegueFourni = collegues_mock;


  ngOnInit(): void {
  }

  creationCollegue() {
    console.log('Creation d’un nouveau collegue');
  }
}
