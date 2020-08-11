import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatesettingComponent } from './affiliatesetting.component';

describe('AffiliatesettingComponent', () => {
  let component: AffiliatesettingComponent;
  let fixture: ComponentFixture<AffiliatesettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliatesettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliatesettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
