import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaFComponent } from './cinema-f.component';

describe('CinemaFComponent', () => {
  let component: CinemaFComponent;
  let fixture: ComponentFixture<CinemaFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
