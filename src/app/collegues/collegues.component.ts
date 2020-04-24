import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/collegue'
@Component({
  selector: 'app-collegues',
  templateUrl: './collegues.component.html',
  styleUrls: ['./collegues.component.css']
})
export class ColleguesComponent implements OnInit {

  @Input() col: Collegue;
  constructor() { }

  ngOnInit(): void {
  }
  modifier() {
    console.log('Modification du collegue');
  }
  creationCollegue() {
    console.log('Creation d’un nouveau collegue');
  }
}
