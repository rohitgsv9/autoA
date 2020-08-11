import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsapploginComponent } from './whatsapplogin.component';

describe('WhatsapploginComponent', () => {
  let component: WhatsapploginComponent;
  let fixture: ComponentFixture<WhatsapploginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsapploginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsapploginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
