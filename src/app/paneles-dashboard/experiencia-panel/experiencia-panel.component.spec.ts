import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaPanelComponent } from './experiencia-panel.component';

describe('ExperienciaPanelComponent', () => {
  let component: ExperienciaPanelComponent;
  let fixture: ComponentFixture<ExperienciaPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
