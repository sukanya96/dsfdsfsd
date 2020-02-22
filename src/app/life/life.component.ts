import { Component, OnInit,AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit,AfterViewInit {

  ngAfterViewInit() {
    var swiper1  = new Swiper('.swiper-container', {
      slidesPerView: 4,
      centeredSlides: true,
      spaceBetween:30,
      grabCursor:true,
      pagination: {
        el:'.swiper-pagination',
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
