import { Component, OnInit,AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {
  ngAfterViewInit(){
    var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
        '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
        ]);
    });
    document.querySelector('.prepend-slide').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
    });
    document.querySelector('.append-slide').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
    });
    document.querySelector('.append-2-slides').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
        '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
        ]);
    });
  }
  
  navbarOpen=true;

  constructor(public dialog: MatDialog)
{}  


ngOnInit() {
    
  }
  

loginDialog(){
    const dialogRef = this.dialog.open(LoginComponent, {
      height:'4in',
      width:'4in'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  signup(){
    const dialogRef = this.dialog.open(SignupComponent, {
      height:'6in',
      width:'5in'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  toggleNavbar(){
    this.navbarOpen=!this.navbarOpen;
  }
}
