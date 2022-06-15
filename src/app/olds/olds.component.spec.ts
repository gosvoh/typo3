import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldsComponent } from './olds.component';

describe('TnrHistComponent', () => {
  let component: OldsComponent;
  let fixture: ComponentFixture<OldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
