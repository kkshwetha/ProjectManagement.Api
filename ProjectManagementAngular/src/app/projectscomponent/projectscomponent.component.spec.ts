import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectscomponentComponent } from './projectscomponent.component';

describe('ProjectscomponentComponent', () => {
  let component: ProjectscomponentComponent;
  let fixture: ComponentFixture<ProjectscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectscomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
