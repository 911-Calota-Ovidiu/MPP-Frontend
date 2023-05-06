import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneFriendComponent } from './get-one-friend.component';

describe('GetOneFriendComponent', () => {
  let component: GetOneFriendComponent;
  let fixture: ComponentFixture<GetOneFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneFriendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOneFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
