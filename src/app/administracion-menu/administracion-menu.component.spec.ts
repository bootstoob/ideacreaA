import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionMenuComponent } from './administracion-menu.component';

describe('AdministracionMenuComponent', () => {
  let component: AdministracionMenuComponent;
  let fixture: ComponentFixture<AdministracionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
