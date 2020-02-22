import { Component, OnInit,AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-rv1',
  templateUrl: './rv1.component.html',
  styleUrls: ['./rv1.component.css']
})
export class Rv1Component implements OnInit,AfterViewInit {

  ngAfterViewInit(){
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
