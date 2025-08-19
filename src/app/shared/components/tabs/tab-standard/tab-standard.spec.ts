import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabStandard } from './tab-standard';

describe('TabStandard', () => {
  let component: TabStandard;
  let fixture: ComponentFixture<TabStandard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabStandard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabStandard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
