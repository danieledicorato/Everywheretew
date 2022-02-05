import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTortaProvVisualizzazioniComponent } from './chart-torta-prov-visualizzazioni.component';

describe('ChartTortaProvVisualizzazioniComponent', () => {
  let component: ChartTortaProvVisualizzazioniComponent;
  let fixture: ComponentFixture<ChartTortaProvVisualizzazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTortaProvVisualizzazioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTortaProvVisualizzazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
