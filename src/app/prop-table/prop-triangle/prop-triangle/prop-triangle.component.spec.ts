import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropTriangleComponent } from './prop-triangle.component';

describe('PropTriangleComponent', () => {
  let component: PropTriangleComponent;
  let fixture: ComponentFixture<PropTriangleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropTriangleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropTriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
