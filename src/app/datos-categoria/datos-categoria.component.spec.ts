/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DatosCategoriaComponent } from './datos-categoria.component';

describe('DatosCategoriaComponent', () => {
  let component: DatosCategoriaComponent;
  let fixture: ComponentFixture<DatosCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
