import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultModelComponent } from './search-result-model.component';

describe('SearchResultModelComponent', () => {
  let component: SearchResultModelComponent;
  let fixture: ComponentFixture<SearchResultModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultModelComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
