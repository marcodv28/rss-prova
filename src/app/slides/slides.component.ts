import { Component, OnInit, Input } from '@angular/core';

//import Swiper core and required modules
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';

SwiperCore.use([
  Pagination
]);

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  mainConfig: SwiperOptions = {
    slidesPerView: 1,
    pagination: {
      dynamicBullets: true
    }
  }

  constructor() { }

  @Input() items

  ngOnInit() {}

  onSwiper(swiper){
    console.log(swiper);
  }
  onSlideChange(){
    console.log('slide change');
  }
}
