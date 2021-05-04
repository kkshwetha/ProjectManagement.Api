import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskcomponentComponent } from './new-taskcomponent.component';

describe('NewTaskcomponentComponent', () => {
  let component: NewTaskcomponentComponent;
  let fixture: ComponentFixture<NewTaskcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTaskcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
