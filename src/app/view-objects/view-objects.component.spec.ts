import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewObjectsComponent } from './view-objects.component';

describe('ViewObjectsComponent', () => {
  let component: ViewObjectsComponent;
  let fixture: ComponentFixture<ViewObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewObjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
