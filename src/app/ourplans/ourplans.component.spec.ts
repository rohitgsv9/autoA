import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurplansComponent } from './ourplans.component';

describe('OurplansComponent', () => {
  let component: OurplansComponent;
  let fixture: ComponentFixture<OurplansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurplansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
