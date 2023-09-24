import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseTwoComponent } from './house-two.component';

describe('HouseTwoComponent', () => {
  let component: HouseTwoComponent;
  let fixture: ComponentFixture<HouseTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
