import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedSingleComponent } from './feed-single.component';

describe('FeedSingleComponent', () => {
  let component: FeedSingleComponent;
  let fixture: ComponentFixture<FeedSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
