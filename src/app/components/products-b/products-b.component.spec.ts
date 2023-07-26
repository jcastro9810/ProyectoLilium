import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBComponent } from './products-b.component';

describe('ProductsBComponent', () => {
  let component: ProductsBComponent;
  let fixture: ComponentFixture<ProductsBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsBComponent]
    });
    fixture = TestBed.createComponent(ProductsBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
