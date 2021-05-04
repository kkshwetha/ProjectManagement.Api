import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteprojectComponent } from './update-deleteproject.component';

describe('UpdateDeleteprojectComponent', () => {
  let component: UpdateDeleteprojectComponent;
  let fixture: ComponentFixture<UpdateDeleteprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateDeleteprojectComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeleteprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
