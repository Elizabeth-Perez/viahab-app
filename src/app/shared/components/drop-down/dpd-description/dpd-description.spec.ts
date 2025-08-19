import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpdDescription } from './dpd-description';

describe('DpdDescription', () => {
  let component: DpdDescription;
  let fixture: ComponentFixture<DpdDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DpdDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpdDescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
