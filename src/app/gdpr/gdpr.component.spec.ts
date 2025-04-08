import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdrpComponent } from './gdpr.component';

describe('GdrpComponent', () => {
  let component: GdrpComponent;
  let fixture: ComponentFixture<GdrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GdrpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GdrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
