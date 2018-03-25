import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsHotPlayingComponent } from './is-hot-playing.component';

describe('IsHotPlayingComponent', () => {
  let component: IsHotPlayingComponent;
  let fixture: ComponentFixture<IsHotPlayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsHotPlayingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsHotPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
