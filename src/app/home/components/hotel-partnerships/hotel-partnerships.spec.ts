import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelPartnerships } from './hotel-partnerships';

describe('HotelPartnerships', () => {
  let component: HotelPartnerships;
  let fixture: ComponentFixture<HotelPartnerships>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelPartnerships]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelPartnerships);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
