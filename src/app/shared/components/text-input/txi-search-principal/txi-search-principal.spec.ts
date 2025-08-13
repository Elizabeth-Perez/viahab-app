import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxiSearchPrincipal } from './txi-search-principal';

describe('TxiSearchPrincipal', () => {
  let component: TxiSearchPrincipal;
  let fixture: ComponentFixture<TxiSearchPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TxiSearchPrincipal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxiSearchPrincipal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
