import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatEmployeeComponent } from './updat-employee.component';

describe('UpdatEmployeeComponent', () => {
  let component: UpdatEmployeeComponent;
  let fixture: ComponentFixture<UpdatEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
