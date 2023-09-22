import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FincarreraPage } from './fincarrera.page';

describe('FincarreraPage', () => {
  let component: FincarreraPage;
  let fixture: ComponentFixture<FincarreraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FincarreraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
