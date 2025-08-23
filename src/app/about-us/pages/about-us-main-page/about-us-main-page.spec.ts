import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsMainPage } from './about-us-main-page';

describe('AboutUsMainPage', () => {
  let component: AboutUsMainPage;
  let fixture: ComponentFixture<AboutUsMainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsMainPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
