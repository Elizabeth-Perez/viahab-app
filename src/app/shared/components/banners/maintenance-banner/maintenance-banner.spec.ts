import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceBanner } from './maintenance-banner';

describe('MaintenanceBanner', () => {
  let component: MaintenanceBanner;
  let fixture: ComponentFixture<MaintenanceBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenanceBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
