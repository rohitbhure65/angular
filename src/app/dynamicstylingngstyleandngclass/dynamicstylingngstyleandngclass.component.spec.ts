import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicstylingngstyleandngclassComponent } from './dynamicstylingngstyleandngclass.component';

describe('DynamicstylingngstyleandngclassComponent', () => {
  let component: DynamicstylingngstyleandngclassComponent;
  let fixture: ComponentFixture<DynamicstylingngstyleandngclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicstylingngstyleandngclassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicstylingngstyleandngclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
