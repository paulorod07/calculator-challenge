import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultApproveComponent } from './result-approve.component';

describe('ResultApproveComponent', () => {
  let component: ResultApproveComponent;
  let fixture: ComponentFixture<ResultApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
