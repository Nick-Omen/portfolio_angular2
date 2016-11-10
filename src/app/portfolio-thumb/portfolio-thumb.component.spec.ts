/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PortfolioThumbComponent } from './portfolio-thumb.component';

describe('PortfolioThumbComponent', () => {
  let component: PortfolioThumbComponent;
  let fixture: ComponentFixture<PortfolioThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
