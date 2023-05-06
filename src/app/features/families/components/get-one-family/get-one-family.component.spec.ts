import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneFamilyComponent } from './get-one-family.component';

describe('GetOneFamilyComponent', () => {
  let component: GetOneFamilyComponent;
  let fixture: ComponentFixture<GetOneFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneFamilyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOneFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
