import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularyPrincipal } from './formulary-principal';

describe('FormularyPrincipal', () => {
  let component: FormularyPrincipal;
  let fixture: ComponentFixture<FormularyPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularyPrincipal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularyPrincipal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
