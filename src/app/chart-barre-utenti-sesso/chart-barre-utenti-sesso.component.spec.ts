import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBarreUtentiSessoComponent } from './chart-barre-utenti-sesso.component';

describe('ChartBarreUtentiSessoComponent', () => {
  let component: ChartBarreUtentiSessoComponent;
  let fixture: ComponentFixture<ChartBarreUtentiSessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartBarreUtentiSessoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBarreUtentiSessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
