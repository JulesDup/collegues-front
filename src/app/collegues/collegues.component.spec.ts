import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleguesComponent } from './collegues.component';

describe('ColleguesComponent', () => {
  let component: ColleguesComponent;
  let fixture: ComponentFixture<ColleguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColleguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColleguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
