import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  

  navbarOpen=true;
  constructor() { }

  ngOnInit() {
  }
  toggleNavbar(){
    this.navbarOpen=!this.navbarOpen;
  }

}
