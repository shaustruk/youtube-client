import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemModelComponent } from './search-item-model.component';

describe('SearchItemModelComponent', () => {
  let component: SearchItemModelComponent;
  let fixture: ComponentFixture<SearchItemModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchItemModelComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchItemModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
