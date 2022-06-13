import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnrHistComponent } from './tnr-hist.component';

describe('TnrHistComponent', () => {
  let component: TnrHistComponent;
  let fixture: ComponentFixture<TnrHistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TnrHistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TnrHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
