import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LembasComponent } from './lembas.component';

describe('LembasComponent', () => {
  let component: LembasComponent;
  let fixture: ComponentFixture<LembasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LembasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LembasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
