import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryStartComponent } from './story-start.component';

describe('StoryStartComponent', () => {
  let component: StoryStartComponent;
  let fixture: ComponentFixture<StoryStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
