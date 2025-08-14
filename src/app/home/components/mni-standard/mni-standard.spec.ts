import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MniStandard } from './mni-standard';

describe('MniStandard', () => {
  let component: MniStandard;
  let fixture: ComponentFixture<MniStandard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MniStandard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MniStandard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
