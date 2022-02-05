import {Component, Input, OnInit} from '@angular/core';
import {ClusterModel} from "../cluster/cluster.component";

@Component({
  selector: 'app-chart-torta-prov-visualizzazioni',
  templateUrl: './chart-torta-prov-visualizzazioni.component.html',
  styleUrls: ['./chart-torta-prov-visualizzazioni.component.css']
})
export class ChartTortaProvVisualizzazioniComponent implements OnInit {
  @Input() clusterSelected: ClusterModel = new ClusterModel();
  type = 'doughnut';
  data = {};
  options = {
    responsive: true,
    maintainAspectRatio: true
  };
  constructor() { }

  ngOnInit(): void {
    let dati = [];

    if(this.clusterSelected.Facebook == 0 && this.clusterSelected.Twitter == 0){
      dati = [30, 25, 45]
    }
    else{
      dati = [this.clusterSelected.Facebook, this.clusterSelected.Twitter, this.clusterSelected.Referral]
    }

    this.data = {
      labels: ["Instagram/Facebook", "Twitter", "Referral"],
      datasets: [
        {
          label: "Utenti per Cluster",
          data: dati,
          backgroundColor: [
            'rgba(91,3,199,0.73)',
            'rgba(1,112,187,0.69)',
            'rgba(5,105,2,0.81)'
          ],
          circumference: 200
        }
      ]
    };
  }

}
