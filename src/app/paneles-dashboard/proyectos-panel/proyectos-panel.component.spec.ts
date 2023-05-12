import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosPanelComponent } from './proyectos-panel.component';

describe('ProyectosPanelComponent', () => {
  let component: ProyectosPanelComponent;
  let fixture: ComponentFixture<ProyectosPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
