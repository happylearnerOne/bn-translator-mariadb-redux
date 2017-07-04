import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTranslatorComponent } from './add-translator.component';

describe('AddTranslatorComponent', () => {
  let component: AddTranslatorComponent;
  let fixture: ComponentFixture<AddTranslatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTranslatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTranslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
