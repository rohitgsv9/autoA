import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivewpgroupComponent } from './activewpgroup.component';

describe('ActivewpgroupComponent', () => {
  let component: ActivewpgroupComponent;
  let fixture: ComponentFixture<ActivewpgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivewpgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivewpgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
