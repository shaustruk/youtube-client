import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortsSearchAreaComponent } from './sorts-search-area.component';

describe('SortsSearchAreaComponent', () => {
  let component: SortsSearchAreaComponent;
  let fixture: ComponentFixture<SortsSearchAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortsSearchAreaComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortsSearchAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
