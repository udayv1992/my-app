import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentidComponent } from './create-studentid.component';

describe('CreateStudentidComponent', () => {
  let component: CreateStudentidComponent;
  let fixture: ComponentFixture<CreateStudentidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudentidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStudentidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
