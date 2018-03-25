import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsCommingComponent } from './is-comming.component';

describe('IsCommingComponent', () => {
  let component: IsCommingComponent;
  let fixture: ComponentFixture<IsCommingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsCommingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsCommingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
