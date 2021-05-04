import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteTaskcomponentComponent } from './update-delete-taskcomponent.component';

describe('UpdateDeleteTaskcomponentComponent', () => {
  let component: UpdateDeleteTaskcomponentComponent;
  let fixture: ComponentFixture<UpdateDeleteTaskcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDeleteTaskcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeleteTaskcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
