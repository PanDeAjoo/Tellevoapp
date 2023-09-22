import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutalistaPage } from './rutalista.page';

describe('RutalistaPage', () => {
  let component: RutalistaPage;
  let fixture: ComponentFixture<RutalistaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RutalistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
