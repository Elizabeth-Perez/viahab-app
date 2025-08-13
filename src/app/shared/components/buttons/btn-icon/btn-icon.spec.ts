import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnIcon } from './btn-icon';

describe('BtnIcon', () => {
  let component: BtnIcon;
  let fixture: ComponentFixture<BtnIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
