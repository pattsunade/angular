import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaExperienciaComponent } from './hoja-experiencia.component';

describe('HojaExperienciaComponent', () => {
  let component: HojaExperienciaComponent;
  let fixture: ComponentFixture<HojaExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HojaExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HojaExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
