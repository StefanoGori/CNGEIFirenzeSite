import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinquePerMilleComponent } from './cinque-per-mille.component';

describe('CinquePerMilleComponent', () => {
  let component: CinquePerMilleComponent;
  let fixture: ComponentFixture<CinquePerMilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinquePerMilleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinquePerMilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
