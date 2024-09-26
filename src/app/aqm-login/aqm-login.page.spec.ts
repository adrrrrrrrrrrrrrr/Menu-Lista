import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AqmLoginPage } from './aqm-login.page';

describe('AqmLoginPage', () => {
  let component: AqmLoginPage;
  let fixture: ComponentFixture<AqmLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AqmLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
