import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDarkNavComponent } from './layout-dark-nav.component';

describe('LayoutDarkNavComponent', () => {
  let component: LayoutDarkNavComponent;
  let fixture: ComponentFixture<LayoutDarkNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutDarkNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDarkNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
