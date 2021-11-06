import { Component, OnInit, Input, ViewChild } from '@angular/core';

//import Swiper core and required modules
import SwiperCore, { SwiperOptions, Pagination} from 'swiper';

SwiperCore.use([
  Pagination
]);

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  backgroundColor = 'pink';

  mainConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 100,
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
    this.backgroundColor = this.randomColor();
    document.getElementById('swiper-container').style.backgroundColor = this.backgroundColor;
    console.log('background: ' + this.backgroundColor);
  }

  private randomColor() : string{
    return "rgb(" +
            this.getRandomInt(0, 255) + ", " +
            this.getRandomInt(0, 255) + ", " +
            this.getRandomInt(0, 255) +
            ")";
  }

  private getRandomInt(min, max) : number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
}
