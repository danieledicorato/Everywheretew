import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-barre-utenti-per-cluster',
  templateUrl: './chart-barre-utenti-per-cluster.component.html',
  styleUrls: ['./chart-barre-utenti-per-cluster.component.css']
})
export class ChartBarreUtentiPerClusterComponent implements OnInit {
  type = 'bar';
  data = {
    labels: ["Cluster Test1", "Cluster Test2", "Cluster Test3"],
    datasets: [
      {
        label: "Utenti per Cluster",
        data: [65, 59, 80],
        backgroundColor: [
          'rgba(236,26,70,0.65)',
          'rgba(12,138,224,0.62)',
          'rgba(232,168,11,0.67)'
        ],
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
