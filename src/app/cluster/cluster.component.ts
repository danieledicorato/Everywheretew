import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css']
})
export class ClusterComponent implements OnInit {
  @Input() clusterSelected: ClusterModel = new ClusterModel();
  server = 'localhost';
  port = '10000';
  isLoading: boolean = false;

  constructor(public BasicAuth: AuthService, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.getClusterDetail(this.clusterSelected.id)
  }

  getClusterDetail(id: string): Observable<ClusterModel>{
    this.isLoading = true;
    let username = sessionStorage.getItem('email');
    let password = sessionStorage.getItem('password');

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(username+':'+password)
      })
    };

    let temp = this.httpClient.get<ClusterModel>(`http://${this.server}:${this.port}/api/clusters/${id}`, httpOptions);
    temp.subscribe((value) => {
      this.clusterSelected=value;
      this.isLoading = false;
    });
    return temp;
  }

}

export class ClusterModel {
  id: string = "";
  name: string = "";
  userId: string = "";
  Women: number = 0;
  Men: number = 0;
  NotDeclared = 0;
  Facebook = 0;
  Twitter = 0;
  Referral = 0;
  Products: Product[] = [];
}

export class Product{
  Name:           string = ""
  Tags  :         string[] = []
  Description  :  string = ""
  ConversationId: string = ""
  ExternalId   :  string = ""
  Source   :      string = ""
  Country  :      string = ""
  AvgAge   :      number = 0
  TotalEarnings:  number = 0
  PublishDate :   string = ""
}
