import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AqmParticipantesPage } from './aqm-participantes.page';

describe('AqmParticipantesPage', () => {
  let component: AqmParticipantesPage;
  let fixture: ComponentFixture<AqmParticipantesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AqmParticipantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
