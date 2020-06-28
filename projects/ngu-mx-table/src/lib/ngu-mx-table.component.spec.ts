import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguMxTableComponent } from './ngu-mx-table.component';

describe('NguMxTableComponent', () => {
  let component: NguMxTableComponent;
  let fixture: ComponentFixture<NguMxTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguMxTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguMxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
