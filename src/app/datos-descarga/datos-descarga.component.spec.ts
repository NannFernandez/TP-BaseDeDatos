/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DatosDescargaComponent } from './datos-descarga.component';

describe('DatosDescargaComponent', () => {
  let component: DatosDescargaComponent;
  let fixture: ComponentFixture<DatosDescargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosDescargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosDescargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
