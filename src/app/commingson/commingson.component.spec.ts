import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommingsonComponent } from './commingson.component';

describe('CommingsonComponent', () => {
  let component: CommingsonComponent;
  let fixture: ComponentFixture<CommingsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommingsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommingsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
