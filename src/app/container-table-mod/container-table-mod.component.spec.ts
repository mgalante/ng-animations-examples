import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTableModComponent } from './container-table-mod.component';

describe('ContainerTableModComponent', () => {
  let component: ContainerTableModComponent;
  let fixture: ComponentFixture<ContainerTableModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerTableModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerTableModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
