import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsLoaderComponent } from './tms-loader.component';

describe('TmsLoaderComponent', () => {
  let component: TmsLoaderComponent;
  let fixture: ComponentFixture<TmsLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TmsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
