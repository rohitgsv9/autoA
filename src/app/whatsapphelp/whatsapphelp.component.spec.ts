import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsapphelpComponent } from './whatsapphelp.component';

describe('WhatsapphelpComponent', () => {
  let component: WhatsapphelpComponent;
  let fixture: ComponentFixture<WhatsapphelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsapphelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsapphelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
