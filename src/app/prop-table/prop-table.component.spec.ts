import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropTableComponent } from './prop-table.component';

describe('PropTableComponent', () => {
  let component: PropTableComponent;
  let fixture: ComponentFixture<PropTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
