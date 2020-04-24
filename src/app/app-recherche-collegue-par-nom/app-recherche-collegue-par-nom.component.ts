import { Component, OnInit } from '@angular/core';
import { listCollegues_mock } from '../mock/collegues.mock';
@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './app-recherche-collegue-par-nom.component.html',
  styleUrls: ['./app-recherche-collegue-par-nom.component.css']
})
export class AppRechercheCollegueParNomComponent implements OnInit {
  listCollegues = listCollegues_mock;
  constructor() { }

  ngOnInit(): void {
  }

}
