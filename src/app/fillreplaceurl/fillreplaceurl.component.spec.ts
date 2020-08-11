import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillreplaceurlComponent } from './fillreplaceurl.component';

describe('FillreplaceurlComponent', () => {
  let component: FillreplaceurlComponent;
  let fixture: ComponentFixture<FillreplaceurlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillreplaceurlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillreplaceurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
