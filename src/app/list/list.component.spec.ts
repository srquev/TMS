import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPopupComponent } from './list.component';

describe('ListPopupComponent', () => {
  let component: ListPopupComponent;
  let fixture: ComponentFixture<ListPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
