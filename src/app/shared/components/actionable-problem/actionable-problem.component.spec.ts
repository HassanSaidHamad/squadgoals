import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionableProblemComponent } from './actionable-problem.component';

describe('ActionableProblemComponent', () => {
  let component: ActionableProblemComponent;
  let fixture: ComponentFixture<ActionableProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionableProblemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionableProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
