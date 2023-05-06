import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChildFamilyComponent } from './add-child-family.component';

describe('AddChildFamilyComponent', () => {
  let component: AddChildFamilyComponent;
  let fixture: ComponentFixture<AddChildFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChildFamilyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChildFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
