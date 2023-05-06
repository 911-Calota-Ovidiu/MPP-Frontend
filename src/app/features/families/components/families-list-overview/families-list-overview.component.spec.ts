import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliesListOverviewComponent } from './families-list-overview.component';

describe('FamiliesListOverviewComponent', () => {
  let component: FamiliesListOverviewComponent;
  let fixture: ComponentFixture<FamiliesListOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamiliesListOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamiliesListOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
