import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropSquareComponent } from './prop-square.component';

describe('PropSquareComponent', () => {
  let component: PropSquareComponent;
  let fixture: ComponentFixture<PropSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
