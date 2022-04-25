import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePlannerWithDeleteComponent } from './simple-planner-with-delete.component';

describe('SimplePlannerWithDeleteComponent', () => {
  let component: SimplePlannerWithDeleteComponent;
  let fixture: ComponentFixture<SimplePlannerWithDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplePlannerWithDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePlannerWithDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
