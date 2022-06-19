import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrebuiltTemplateComponent } from './prebuilt-template.component';

describe('PrebuiltTemplateComponent', () => {
  let component: PrebuiltTemplateComponent;
  let fixture: ComponentFixture<PrebuiltTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrebuiltTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrebuiltTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
