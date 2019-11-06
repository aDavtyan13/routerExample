import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.css']
})
export class LoginSectionComponent implements OnInit {

  loginPage:FormGroup;

  public dam;

  constructor(public fb:FormBuilder,private router: Router) { }

  ngOnInit() {
    this.loginPage=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]

    })
  }

  

  onSubmit(){
    if(this.loginPage.valid){
      if((this.loginPage.value.username=="admin" && this.loginPage.value.password=="admin") ||
      (this.loginPage.value.username=="demo"&& this.loginPage.value.password=="demo")){

        localStorage.setItem('username', this.loginPage.value.username);
        this.router.navigate(['/users']);
      }
      else{
        localStorage.setItem('username',this.loginPage.value.username);
        this.router.navigate(['/users']);
      }
    }

  }

 
  
  // [routerLink]="['/users']"

}
