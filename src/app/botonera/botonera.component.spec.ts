/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BotoneraComponent } from './botonera.component';

describe('BotoneraComponent', () => {
  let component: BotoneraComponent;
  let fixture: ComponentFixture<BotoneraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotoneraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
