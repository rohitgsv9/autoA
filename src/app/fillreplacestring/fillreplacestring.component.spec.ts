import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillreplacestringComponent } from './fillreplacestring.component';

describe('FillreplacestringComponent', () => {
  let component: FillreplacestringComponent;
  let fixture: ComponentFixture<FillreplacestringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillreplacestringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillreplacestringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
