import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutalistaconductorPage } from './rutalistaconductor.page';

describe('RutalistaconductorPage', () => {
  let component: RutalistaconductorPage;
  let fixture: ComponentFixture<RutalistaconductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RutalistaconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
