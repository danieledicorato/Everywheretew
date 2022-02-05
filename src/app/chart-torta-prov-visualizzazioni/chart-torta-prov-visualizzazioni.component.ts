import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-torta-prov-visualizzazioni',
  templateUrl: './chart-torta-prov-visualizzazioni.component.html',
  styleUrls: ['./chart-torta-prov-visualizzazioni.component.css']
})
export class ChartTortaProvVisualizzazioniComponent implements OnInit {
  type = 'doughnut';
  data = {
    labels: ["Instagram/Facebook", "Twitter", "Referral"],
    datasets: [
      {
        label: "Utenti per Cluster",
        data: [60, 30, 10],
        backgroundColor: [
          'rgba(91,3,199,0.73)',
          'rgba(1,112,187,0.69)',
          'rgba(5,105,2,0.81)'
        ],
        circumference: 200
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: true
  };
  constructor() { }

  ngOnInit(): void {
  }

}
