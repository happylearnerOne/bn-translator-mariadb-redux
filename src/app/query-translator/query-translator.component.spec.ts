import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryTranslatorComponent } from './query-translator.component';

describe('QueryTranslatorComponent', () => {
  let component: QueryTranslatorComponent;
  let fixture: ComponentFixture<QueryTranslatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryTranslatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryTranslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
