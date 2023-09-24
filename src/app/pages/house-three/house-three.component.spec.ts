import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseThreeComponent } from './house-three.component';

describe('HouseThreeComponent', () => {
  let component: HouseThreeComponent;
  let fixture: ComponentFixture<HouseThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
