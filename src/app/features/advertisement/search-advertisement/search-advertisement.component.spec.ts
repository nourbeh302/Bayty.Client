import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchAdvertisementComponent } from "./search-advertisement.component";

describe("SearchAdvertisementComponent", () => {
  let component: SearchAdvertisementComponent;
  let fixture: ComponentFixture<SearchAdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchAdvertisementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
