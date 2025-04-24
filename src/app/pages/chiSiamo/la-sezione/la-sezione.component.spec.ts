import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaSezioneComponent } from './la-sezione.component';

describe('LaSezioneComponent', () => {
  let component: LaSezioneComponent;
  let fixture: ComponentFixture<LaSezioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaSezioneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaSezioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
