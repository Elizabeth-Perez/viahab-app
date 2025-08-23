import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPrincipal } from './about-us-principal';

describe('AboutUsPrincipal', () => {
  let component: AboutUsPrincipal;
  let fixture: ComponentFixture<AboutUsPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsPrincipal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsPrincipal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
