import { Component, OnInit } from '@angular/core';

//import Swiper core and required modules
import SwiperCore from 'swiper';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  onSwiper(swiper){
    console.log(swiper);
  }
  onSlideChange(){
    console.log('slide change');
  }
}
