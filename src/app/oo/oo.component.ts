import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oo',
  templateUrl: './oo.component.html',
  styleUrls: ['./oo.component.css']
})
export class OoComponent implements OnInit {
  navbar:boolean=false;

  constructor() { }

  ngOnInit() {
  }


  click(){
    
    this.navbar=!this.navbar;
    console.log('sdf')
  }
}
