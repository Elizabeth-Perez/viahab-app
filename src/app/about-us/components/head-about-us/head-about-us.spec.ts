import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadAboutUs } from './head-about-us';

describe('HeadAboutUs', () => {
  let component: HeadAboutUs;
  let fixture: ComponentFixture<HeadAboutUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadAboutUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadAboutUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
