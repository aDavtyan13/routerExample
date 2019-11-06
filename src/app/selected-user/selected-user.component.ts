import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrls: ['./selected-user.component.css']
})
export class SelectedUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  edit(){
    this.router.navigate(['/selected']);
  }

}
