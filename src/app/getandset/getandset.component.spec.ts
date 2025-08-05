import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetandsetComponent } from './getandset.component';

describe('GetandsetComponent', () => {
  let component: GetandsetComponent;
  let fixture: ComponentFixture<GetandsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetandsetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetandsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
