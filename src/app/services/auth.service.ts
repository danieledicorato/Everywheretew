import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  server = '151.0.197.14';
  //server = 'localhost';
  port = '10000';
  constructor(private httpClient: HttpClient) { }
  authenticate(UserId: string, Password: string): Observable<User> {
    return this.httpClient.get<User>(`http://${this.server}:${this.port}/api/login?username=${UserId}&password=${Password}`);
  }
  loggedUser(): string{
    return sessionStorage.getItem('email') ?? "";
  }
  isLogged(): boolean{
    // @ts-ignore
    return sessionStorage.getItem('email') != null && sessionStorage.getItem('email').length>0;
  }
  clearAll(): void{
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
  }
}

export class User{
  constructor(
    public Id: bigint,
    public Email: string,
    public Name: string,
    public Password: string,
    public Role: string
  ) {}
}
