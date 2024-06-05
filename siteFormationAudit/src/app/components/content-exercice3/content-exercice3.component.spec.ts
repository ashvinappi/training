import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentExercice3Component } from './content-exercice3.component';

describe('ContentExercice3Component', () => {
  let component: ContentExercice3Component;
  let fixture: ComponentFixture<ContentExercice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentExercice3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentExercice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
