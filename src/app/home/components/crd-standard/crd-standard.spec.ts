import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrdStandard } from './crd-standard';

describe('CrdStandard', () => {
  let component: CrdStandard;
  let fixture: ComponentFixture<CrdStandard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrdStandard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrdStandard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
