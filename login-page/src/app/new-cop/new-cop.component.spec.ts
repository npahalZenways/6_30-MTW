import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCopComponent } from './new-cop.component';

describe('NewCopComponent', () => {
  let component: NewCopComponent;
  let fixture: ComponentFixture<NewCopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
