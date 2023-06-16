import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarNotaComponent } from './cadastrar-nota.component';

describe('CadastrarNotaComponent', () => {
  let component: CadastrarNotaComponent;
  let fixture: ComponentFixture<CadastrarNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarNotaComponent]
    });
    fixture = TestBed.createComponent(CadastrarNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
