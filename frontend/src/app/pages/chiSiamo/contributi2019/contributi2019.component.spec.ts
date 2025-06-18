import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contributi2019Component } from './contributi2019.component';

describe('Contributi2019Component', () => {
  let component: Contributi2019Component;
  let fixture: ComponentFixture<Contributi2019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contributi2019Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contributi2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
