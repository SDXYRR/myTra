import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenimesComponent } from './cenimes.component';

describe('CenimesComponent', () => {
  let component: CenimesComponent;
  let fixture: ComponentFixture<CenimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
