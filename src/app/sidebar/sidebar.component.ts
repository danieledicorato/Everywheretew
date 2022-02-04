import {Component, Input, OnInit} from '@angular/core';
import {AuthService, User} from "../services/auth.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClusterModel} from "../cluster/cluster.component";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  server = 'localhost';
  port = '10000';

  pageIndex: number = 0;
  clusterList: ClusterModel[] = [];
  isLoading: boolean = false;

  constructor(public BasicAuth: AuthService, private httpClient: HttpClient) { }
  @Input() Show: boolean = this.BasicAuth.isLogged();

  ngOnInit(): void {
  }

  changePageIndex(index: number): void {
    this.pageIndex = index
  }

  getClusterList(): Observable<ClusterModel[]>{
    let username = sessionStorage.getItem('email');
    let password = sessionStorage.getItem('password');

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(username+':'+password)
      })
    };
    this.isLoading = true;
    let temp = this.httpClient.get<ClusterModel[]>(`http://${this.server}:${this.port}/api/clusters/all`, httpOptions);
    temp.subscribe((value) => {
      this.clusterList=value;
      this.isLoading = false;
    });
    return temp;
  }

  clearClusterList(): void{
    this.clusterList = [];
  }
}
