import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenurutaPage } from './menuruta.page';

describe('MenurutaPage', () => {
  let component: MenurutaPage;
  let fixture: ComponentFixture<MenurutaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenurutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
