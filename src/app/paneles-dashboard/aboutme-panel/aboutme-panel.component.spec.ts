import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmePanelComponent } from './aboutme-panel.component';

describe('AboutmePanelComponent', () => {
  let component: AboutmePanelComponent;
  let fixture: ComponentFixture<AboutmePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutmePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
