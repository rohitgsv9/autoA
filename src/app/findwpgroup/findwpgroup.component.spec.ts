import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindwpgroupComponent } from './findwpgroup.component';

describe('FindwpgroupComponent', () => {
  let component: FindwpgroupComponent;
  let fixture: ComponentFixture<FindwpgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindwpgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindwpgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
