import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsMangerComponent } from './tms-manger.component';

describe('TmsMangerComponent', () => {
  let component: TmsMangerComponent;
  let fixture: ComponentFixture<TmsMangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsMangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TmsMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
