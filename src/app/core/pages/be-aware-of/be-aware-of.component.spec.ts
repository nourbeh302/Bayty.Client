import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeAwareOfComponent } from './be-aware-of.component';

describe('BeAwareOfComponent', () => {
  let component: BeAwareOfComponent;
  let fixture: ComponentFixture<BeAwareOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeAwareOfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeAwareOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
