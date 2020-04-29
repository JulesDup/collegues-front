import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormCollegueComponent } from './app-form-collegue.component';

describe('AppFormCollegueComponent', () => {
  let component: AppFormCollegueComponent;
  let fixture: ComponentFixture<AppFormCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFormCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFormCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
