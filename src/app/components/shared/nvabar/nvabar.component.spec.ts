import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvabarComponent } from './nvabar.component';

describe('NvabarComponent', () => {
  let component: NvabarComponent;
  let fixture: ComponentFixture<NvabarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvabarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
