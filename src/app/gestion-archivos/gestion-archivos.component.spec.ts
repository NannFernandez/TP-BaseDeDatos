import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionArchivosComponent } from './gestion-archivos.component';

describe('GestionArchivosComponent', () => {
  let component: GestionArchivosComponent;
  let fixture: ComponentFixture<GestionArchivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionArchivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
