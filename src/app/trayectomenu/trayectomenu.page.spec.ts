import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrayectomenuPage } from './trayectomenu.page';

describe('TrayectomenuPage', () => {
  let component: TrayectomenuPage;
  let fixture: ComponentFixture<TrayectomenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrayectomenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
