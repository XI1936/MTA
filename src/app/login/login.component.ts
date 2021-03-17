import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor() { }
  username;
  password; 
   
  ngOnInit(): void {
  }
  login( ){
    console.log(this.username);
    console.log(this.password); 

  }
email(username){
  this.username=username.viewModel;
}
pass(password){
  this.password=password.viewModel;
}
}