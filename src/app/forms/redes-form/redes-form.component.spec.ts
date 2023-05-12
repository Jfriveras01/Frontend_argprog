import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesFormComponent } from './redes-form.component';

describe('RedesFormComponent', () => {
  let component: RedesFormComponent;
  let fixture: ComponentFixture<RedesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
