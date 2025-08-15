import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrdDegraded } from './crd-degraded';

describe('CrdDegraded', () => {
  let component: CrdDegraded;
  let fixture: ComponentFixture<CrdDegraded>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrdDegraded]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrdDegraded);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
