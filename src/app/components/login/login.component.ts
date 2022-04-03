import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario: {email:string;password:string;} ={
    email: '',
    password: ''
  }
  constructor() { }
  public Ingresar(): any {
  	
  }

  ngOnInit(): void {
  }

}
