import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrdLabel } from './crd-label';

describe('CrdLabel', () => {
  let component: CrdLabel;
  let fixture: ComponentFixture<CrdLabel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrdLabel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrdLabel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
