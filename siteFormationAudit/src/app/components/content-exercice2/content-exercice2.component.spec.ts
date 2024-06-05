import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentExercice2Component } from './content-exercice2.component';

describe('ContentExercice2Component', () => {
  let component: ContentExercice2Component;
  let fixture: ComponentFixture<ContentExercice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentExercice2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentExercice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
