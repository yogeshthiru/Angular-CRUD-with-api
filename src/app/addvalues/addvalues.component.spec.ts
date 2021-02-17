import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvaluesComponent } from './addvalues.component';

describe('AddvaluesComponent', () => {
  let component: AddvaluesComponent;
  let fixture: ComponentFixture<AddvaluesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvaluesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvaluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
