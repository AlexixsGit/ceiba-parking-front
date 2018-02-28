import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartureVehicleComponent } from './departure-vehicle.component';

describe('DepartureVehicleComponent', () => {
  let component: DepartureVehicleComponent;
  let fixture: ComponentFixture<DepartureVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartureVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartureVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
