import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrotherComponent } from './brother.component';

describe('BrotherComponent', () => {
  let component: BrotherComponent;
  let fixture: ComponentFixture<BrotherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrotherComponent]
    });
    fixture = TestBed.createComponent(BrotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
