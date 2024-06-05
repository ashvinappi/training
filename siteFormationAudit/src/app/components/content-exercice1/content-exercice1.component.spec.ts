import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentExercice1Component } from './content-exercice1.component';

describe('ContentExercice1Component', () => {
  let component: ContentExercice1Component;
  let fixture: ComponentFixture<ContentExercice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentExercice1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentExercice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
