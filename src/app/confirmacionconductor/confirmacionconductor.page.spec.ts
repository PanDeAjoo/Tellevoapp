import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacionconductorPage } from './confirmacionconductor.page';

describe('ConfirmacionconductorPage', () => {
  let component: ConfirmacionconductorPage;
  let fixture: ComponentFixture<ConfirmacionconductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmacionconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
