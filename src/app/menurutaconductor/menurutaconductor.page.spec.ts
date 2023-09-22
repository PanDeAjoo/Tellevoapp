import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenurutaconductorPage } from './menurutaconductor.page';

describe('MenurutaconductorPage', () => {
  let component: MenurutaconductorPage;
  let fixture: ComponentFixture<MenurutaconductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenurutaconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
