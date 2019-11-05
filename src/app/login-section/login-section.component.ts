import { Component, OnInit } from '@angular/core';
import {  FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router'


@Component({
  selector: 'login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.css'],
  providers: [MyserviceService]
})
export class LoginSectionComponent implements OnInit {

  loginPage:FormGroup;

  public dam;

  constructor(public fb:FormBuilder,private service : MyserviceService , private routes: Router) { }

  ngOnInit() {
    this.loginPage=this.fb.group({
      login:[''],
      password:['']

    })
  }

  check(uname: string, p : string)
  {
    var output = this.service.checkNamePass(uname, p);
    
    if(output == true)
    {
      this.routes.navigate(['/users']);
    }
    else{
      alert('daaaaaaaaa');
    }
  }

 
  

}
