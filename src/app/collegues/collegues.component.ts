import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/collegue';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-collegues',
  templateUrl: './collegues.component.html',
  styleUrls: ['./collegues.component.css']
})
export class ColleguesComponent implements OnInit, OnDestroy {
  public modModif: boolean;

  collegue: Collegue;
  transferleCollegue: Subscription;
  modeCreation = false;


  constructor(private dtService: DataService) {
    this.modModif = false;
  }

  ngOnInit(): void {
    this.transferleCollegue = this.dtService.leTransfertCollegue.subscribe(collegue => {
      this.collegue = collegue;
    })
  }
  modifier() {
    this.modModif = true;
  }

  validation() {
    this.modModif = false;
  }
  ngOnDestroy() {
    this.transferleCollegue.unsubscribe();


  }
}
