import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GananciaconductorPage } from './gananciaconductor.page';

describe('GananciaconductorPage', () => {
  let component: GananciaconductorPage;
  let fixture: ComponentFixture<GananciaconductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GananciaconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
