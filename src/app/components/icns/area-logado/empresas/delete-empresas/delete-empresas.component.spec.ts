import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmpresasComponent } from './delete-empresas.component';

describe('DeleteEmpresasComponent', () => {
  let component: DeleteEmpresasComponent;
  let fixture: ComponentFixture<DeleteEmpresasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteEmpresasComponent]
    });
    fixture = TestBed.createComponent(DeleteEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
