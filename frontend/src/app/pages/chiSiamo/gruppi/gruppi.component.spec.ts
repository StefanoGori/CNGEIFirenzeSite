import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruppiComponent } from './gruppi.component';

describe('GruppiComponent', () => {
  let component: GruppiComponent;
  let fixture: ComponentFixture<GruppiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GruppiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GruppiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
