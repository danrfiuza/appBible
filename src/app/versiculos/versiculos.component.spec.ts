import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersiculosComponent } from './versiculos.component';

describe('VersiculosComponent', () => {
  let component: VersiculosComponent;
  let fixture: ComponentFixture<VersiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
