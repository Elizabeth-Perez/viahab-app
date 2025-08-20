import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastAboutUs } from './fast-about-us';

describe('FastAboutUs', () => {
  let component: FastAboutUs;
  let fixture: ComponentFixture<FastAboutUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FastAboutUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FastAboutUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
