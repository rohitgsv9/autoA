import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegrambotComponent } from './telegrambot.component';

describe('TelegrambotComponent', () => {
  let component: TelegrambotComponent;
  let fixture: ComponentFixture<TelegrambotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelegrambotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelegrambotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
