/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StoryPage1Component } from './story-page1.component';

describe('StoryPage1Component', () => {
  let component: StoryPage1Component;
  let fixture: ComponentFixture<StoryPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
