import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersGetByIdComponent } from './users-get-by-id.component';

describe('UsersGetByIdComponent', () => {
  let component: UsersGetByIdComponent;
  let fixture: ComponentFixture<UsersGetByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersGetByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersGetByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
