import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneChildComponent } from './get-one-child.component';

describe('GetOneChildComponent', () => {
  let component: GetOneChildComponent;
  let fixture: ComponentFixture<GetOneChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOneChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
