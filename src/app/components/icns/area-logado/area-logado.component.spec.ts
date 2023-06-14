import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaLogadoComponent } from './area-logado.component';

describe('AreaLogadoComponent', () => {
  let component: AreaLogadoComponent;
  let fixture: ComponentFixture<AreaLogadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaLogadoComponent]
    });
    fixture = TestBed.createComponent(AreaLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
