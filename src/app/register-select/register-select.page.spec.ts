import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterSelectPage } from './register-select.page';

describe('RegisterSelectPage', () => {
  let component: RegisterSelectPage;
  let fixture: ComponentFixture<RegisterSelectPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
