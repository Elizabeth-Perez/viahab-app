import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrecuentlyAskedQuestions } from './frequently-asked-questions';

describe('FrecuentlyAskedQuestions', () => {
  let component: FrecuentlyAskedQuestions;
  let fixture: ComponentFixture<FrecuentlyAskedQuestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrecuentlyAskedQuestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrecuentlyAskedQuestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
