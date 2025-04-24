import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributiComponent } from './contributi.component';

describe('ContributiComponent', () => {
  let component: ContributiComponent;
  let fixture: ComponentFixture<ContributiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
