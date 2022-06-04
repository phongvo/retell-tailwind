import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyMenuComponent } from './fly-menu.component';

describe('FlyMenuComponent', () => {
  let component: FlyMenuComponent;
  let fixture: ComponentFixture<FlyMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlyMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
