import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IscrizioniComponent } from './iscrizioni.component';

describe('IscrizioniComponent', () => {
  let component: IscrizioniComponent;
  let fixture: ComponentFixture<IscrizioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IscrizioniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IscrizioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
