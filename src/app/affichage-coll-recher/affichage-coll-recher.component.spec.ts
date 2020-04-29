import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageCollRecherComponent } from './affichage-coll-recher.component';

describe('AffichageCollRecherComponent', () => {
  let component: AffichageCollRecherComponent;
  let fixture: ComponentFixture<AffichageCollRecherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageCollRecherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageCollRecherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
