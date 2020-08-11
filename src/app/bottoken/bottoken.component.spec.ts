import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottokenComponent } from './bottoken.component';

describe('BottokenComponent', () => {
  let component: BottokenComponent;
  let fixture: ComponentFixture<BottokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
