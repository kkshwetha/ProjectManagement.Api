import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewprojectComponentComponent } from './newproject-component.component';

describe('NewprojectComponentComponent', () => {
  let component: NewprojectComponentComponent;
  let fixture: ComponentFixture<NewprojectComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewprojectComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewprojectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
