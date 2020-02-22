import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlesmallheaderComponent } from './middlesmallheader.component';

describe('MiddlesmallheaderComponent', () => {
  let component: MiddlesmallheaderComponent;
  let fixture: ComponentFixture<MiddlesmallheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddlesmallheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddlesmallheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
