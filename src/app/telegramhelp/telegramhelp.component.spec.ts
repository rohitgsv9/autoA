import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegramhelpComponent } from './telegramhelp.component';

describe('TelegramhelpComponent', () => {
  let component: TelegramhelpComponent;
  let fixture: ComponentFixture<TelegramhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelegramhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelegramhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
