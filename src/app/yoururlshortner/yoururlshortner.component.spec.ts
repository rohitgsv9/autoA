import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoururlshortnerComponent } from './yoururlshortner.component';

describe('YoururlshortnerComponent', () => {
  let component: YoururlshortnerComponent;
  let fixture: ComponentFixture<YoururlshortnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoururlshortnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoururlshortnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
