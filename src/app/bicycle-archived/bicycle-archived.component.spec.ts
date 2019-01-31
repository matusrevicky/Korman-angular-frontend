import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicycleArchivedComponent } from './bicycle-archived.component';

describe('BicycleArchivedComponent', () => {
  let component: BicycleArchivedComponent;
  let fixture: ComponentFixture<BicycleArchivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicycleArchivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicycleArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
