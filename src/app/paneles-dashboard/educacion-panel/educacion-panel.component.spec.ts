import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionPanelComponent } from './educacion-panel.component';

describe('EducacionPanelComponent', () => {
  let component: EducacionPanelComponent;
  let fixture: ComponentFixture<EducacionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
