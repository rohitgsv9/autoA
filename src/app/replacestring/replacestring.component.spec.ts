import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplacestringComponent } from './replacestring.component';

describe('ReplacestringComponent', () => {
  let component: ReplacestringComponent;
  let fixture: ComponentFixture<ReplacestringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplacestringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplacestringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
