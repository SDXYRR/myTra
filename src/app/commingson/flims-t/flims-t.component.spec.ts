import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlimsTComponent } from './flims-t.component';

describe('FlimsTComponent', () => {
  let component: FlimsTComponent;
  let fixture: ComponentFixture<FlimsTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlimsTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlimsTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
