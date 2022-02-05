import {Component, Input, OnInit} from '@angular/core';
import {ClusterModel} from "../cluster/cluster.component";

@Component({
  selector: 'app-chart-barre-utenti-sesso',
  templateUrl: './chart-barre-utenti-sesso.component.html',
  styleUrls: ['./chart-barre-utenti-sesso.component.css']
})
export class ChartBarreUtentiSessoComponent implements OnInit {
  @Input() clusterSelected: ClusterModel = new ClusterModel();
  type = 'bar';
  data = {};
  options = {
    responsive: true,
    maintainAspectRatio: true
  };

  constructor() { }

  ngOnInit(): void {
    this.data = {
      labels: ["Donna", "Uomo", "Non dichiarato"],
      datasets: [
        {
          label: "Utenti per Sesso",
          data: [this.clusterSelected.Women, this.clusterSelected.Men, this.clusterSelected.NotDeclared],
          backgroundColor: [
            'rgba(236,26,70,0.72)',
            'rgba(12,138,224,0.82)',
            'rgba(182,147,6,0.74)'
          ],
        }
      ]
    };
  }

  update() :void{
    this.ngOnInit()
  }
}
