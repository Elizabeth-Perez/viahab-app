import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpdStandard } from './dpd-standard';

describe('DpdStandard', () => {
  let component: DpdStandard;
  let fixture: ComponentFixture<DpdStandard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DpdStandard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpdStandard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
