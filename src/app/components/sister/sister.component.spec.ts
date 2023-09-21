import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisterComponent } from './sister.component';

describe('SisterComponent', () => {
  let component: SisterComponent;
  let fixture: ComponentFixture<SisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SisterComponent]
    });
    fixture = TestBed.createComponent(SisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
