import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteUserComponentComponent } from './update-delete-user-component.component';

describe('UpdateDeleteUserComponentComponent', () => {
  let component: UpdateDeleteUserComponentComponent;
  let fixture: ComponentFixture<UpdateDeleteUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDeleteUserComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeleteUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
