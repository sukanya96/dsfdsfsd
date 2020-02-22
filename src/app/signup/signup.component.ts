import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public forms: FormGroup;

  constructor(private formBuilder:FormBuilder,private myRoute:Router) {
    this.forms = this.formBuilder.group({
      FullName:['',[Validators.required]],
      Email:['',[Validators.required]],
      Password:['',[Validators.required]]
    })
   }

  ngOnInit() {
  }
Signup(){
  console.log(this.forms);

}

}
