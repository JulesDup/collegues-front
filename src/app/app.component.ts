import { Component } from '@angular/core';
import { collegues_mock } from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  unObjetCollegueFourni = collegues_mock;
}
