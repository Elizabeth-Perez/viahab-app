import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnStandard } from './btn-standard';

describe('BtnStandard', () => {
  let component: BtnStandard;
  let fixture: ComponentFixture<BtnStandard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnStandard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnStandard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
