import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadContact } from './head-contact';

describe('HeadContact', () => {
  let component: HeadContact;
  let fixture: ComponentFixture<HeadContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
