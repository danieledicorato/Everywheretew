import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public BasicAuth: AuthService) { }
  @Input() Show: boolean = this.BasicAuth.isLogged();

  ngOnInit(): void {
  }

}
