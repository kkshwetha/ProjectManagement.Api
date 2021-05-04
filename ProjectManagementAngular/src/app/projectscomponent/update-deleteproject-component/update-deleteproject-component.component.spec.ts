import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteprojectComponentComponent } from './update-deleteproject-component.component';

describe('UpdateDeleteprojectComponentComponent', () => {
  let component: UpdateDeleteprojectComponentComponent;
  let fixture: ComponentFixture<UpdateDeleteprojectComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDeleteprojectComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeleteprojectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
