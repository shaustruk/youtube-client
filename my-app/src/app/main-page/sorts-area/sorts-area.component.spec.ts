import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortsAreaComponent } from './sorts-area.component';

describe('SortsAreaComponent', () => {
  let component: SortsAreaComponent;
  let fixture: ComponentFixture<SortsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortsAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
