import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskscomponentComponent } from './taskscomponent.component';

describe('TaskscomponentComponent', () => {
  let component: TaskscomponentComponent;
  let fixture: ComponentFixture<TaskscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskscomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
