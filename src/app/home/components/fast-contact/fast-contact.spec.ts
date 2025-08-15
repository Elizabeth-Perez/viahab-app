import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastContact } from './fast-contact';

describe('FastContact', () => {
  let component: FastContact;
  let fixture: ComponentFixture<FastContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FastContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FastContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
