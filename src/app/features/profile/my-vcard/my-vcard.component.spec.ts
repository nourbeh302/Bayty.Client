import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVCardComponent } from './my-vcard.component';

describe('MyVCardComponent', () => {
  let component: MyVCardComponent;
  let fixture: ComponentFixture<MyVCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyVCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyVCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
