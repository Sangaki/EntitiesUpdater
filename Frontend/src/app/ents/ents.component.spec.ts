import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntsComponent } from './ents.component';

describe('EntsComponent', () => {
  let component: EntsComponent;
  let fixture: ComponentFixture<EntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
