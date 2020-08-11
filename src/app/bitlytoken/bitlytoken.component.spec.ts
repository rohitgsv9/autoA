import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitlytokenComponent } from './bitlytoken.component';

describe('BitlytokenComponent', () => {
  let component: BitlytokenComponent;
  let fixture: ComponentFixture<BitlytokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitlytokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitlytokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
