import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBarreUtentiPerClusterComponent } from './chart-barre-utenti-per-cluster.component';

describe('ChartBarreUtentiPerClusterComponent', () => {
  let component: ChartBarreUtentiPerClusterComponent;
  let fixture: ComponentFixture<ChartBarreUtentiPerClusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartBarreUtentiPerClusterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBarreUtentiPerClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
