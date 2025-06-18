import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SostenitoriComponent } from './sostenitori.component';

describe('SostenitoriComponent', () => {
  let component: SostenitoriComponent;
  let fixture: ComponentFixture<SostenitoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SostenitoriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SostenitoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
