import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/collegue'
@Component({
  selector: 'app-collegues',
  templateUrl: './collegues.component.html',
  styleUrls: ['./collegues.component.css']
})
export class ColleguesComponent implements OnInit {
  public modModif: boolean;

  @Input() col: Collegue;

  constructor() {
    this.modModif = false;
  }

  ngOnInit(): void {
  }
  modifier() {
    this.modModif = true;
  }

  validation() {
    this.modModif = false;
  }
}
