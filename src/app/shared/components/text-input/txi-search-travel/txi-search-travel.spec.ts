import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxiSearchTravel } from './txi-search-travel';

describe('TxiSearchTravel', () => {
  let component: TxiSearchTravel;
  let fixture: ComponentFixture<TxiSearchTravel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TxiSearchTravel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxiSearchTravel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
