import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatypeofsignalComponent } from './datatypeofsignal.component';

describe('DatatypeofsignalComponent', () => {
  let component: DatatypeofsignalComponent;
  let fixture: ComponentFixture<DatatypeofsignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatatypeofsignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatypeofsignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
