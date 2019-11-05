import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'data-section',
  templateUrl: './data-section.component.html',
  styleUrls: ['./data-section.component.css'],
  providers:[MyserviceService]
})
export class DataSectionComponent implements OnInit {

  datas=[
    {id:1,name:'anun',surname:'azganun',age:'13'},
    {id:2,name:'newAnun',surname:'newAzganun',age:'17'},
    {id:3,name:'name',surname:'surname',age:'21'},
    {id:4,name:'newName',surname:'newSurname',age:'11'},
    {id:5,name:'Aaa',surname:'Bbbyan',age:'7'}
  ]


  // check(uname: string, p : string)
  // {
  //   var output = this.service.checkNamePass(uname, p);
    
  //   if(output == true)
  //   {
  //     this.routes.navigate(['/users']);
  //   }
  //   else{
  //     alert('daaaaaaaaa');
  //   }
  // }


  constructor(private service : MyserviceService , private router: Router) { }

  ngOnInit() {
  }

  onId(data){
    this.router.navigate(['/selected',data.id]);
  }
}
