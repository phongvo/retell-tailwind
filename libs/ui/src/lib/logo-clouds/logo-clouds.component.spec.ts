import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCloudsComponent } from './logo-clouds.component';

describe('LogoCloudsComponent', () => {
  let component: LogoCloudsComponent;
  let fixture: ComponentFixture<LogoCloudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoCloudsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoCloudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
