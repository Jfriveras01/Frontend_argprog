import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesPanelComponent } from './redes-panel.component';

describe('RedesPanelComponent', () => {
  let component: RedesPanelComponent;
  let fixture: ComponentFixture<RedesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
