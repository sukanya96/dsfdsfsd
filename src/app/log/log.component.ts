import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  public forms: FormGroup;

  constructor(private formBuilder:FormBuilder,private myRoute:Router) {
    this.forms = this.formBuilder.group({
     username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
   }

  ngOnInit() {
  }

  login(){
    console.log(this.forms);
  }
}
