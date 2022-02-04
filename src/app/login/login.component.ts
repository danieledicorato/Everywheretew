import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userid = '';
  password = '';
  errorMsg = '';

  constructor(private route: Router, private basicAuth: AuthService) { }

  ngOnInit(): void {
    this.basicAuth.clearAll(); // svuota eventuali sessioni precedenti
  }
  onSubmit(): void{
    this.basicAuth.clearAll(); // svuota eventuali sessioni precedenti
    this.basicAuth.authenticate(this.userid, this.password).subscribe(
      response => {
        this.errorMsg = '';
        sessionStorage.setItem('email', response.Email);
        sessionStorage.setItem('password', response.Password);
        this.route.navigate(['homepage']);
      },
      (e) => this.errorMsg = this.errorMsg = "401 - Unauthorized"
    );
  }
}
