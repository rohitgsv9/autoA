import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceurlComponent } from './replaceurl.component';

describe('ReplaceurlComponent', () => {
  let component: ReplaceurlComponent;
  let fixture: ComponentFixture<ReplaceurlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaceurlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
