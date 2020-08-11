import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitlyhelpComponent } from './bitlyhelp.component';

describe('BitlyhelpComponent', () => {
  let component: BitlyhelpComponent;
  let fixture: ComponentFixture<BitlyhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitlyhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitlyhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
