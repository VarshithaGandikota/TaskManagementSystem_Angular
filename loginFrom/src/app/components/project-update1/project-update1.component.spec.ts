import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUpdate1Component } from './project-update1.component';

describe('ProjectUpdate1Component', () => {
  let component: ProjectUpdate1Component;
  let fixture: ComponentFixture<ProjectUpdate1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectUpdate1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectUpdate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
