/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DatosEncuestaComponent } from './datos-encuesta.component';

describe('DatosEncuestaComponent', () => {
  let component: DatosEncuestaComponent;
  let fixture: ComponentFixture<DatosEncuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosEncuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
