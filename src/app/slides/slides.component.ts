import { Component, OnInit, Input } from '@angular/core';

//import Swiper core and required modules
import SwiperCore, { SwiperOptions, Pagination, EffectCards, Autoplay} from 'swiper';

SwiperCore.use([
  Pagination,
  EffectCards
  ///Autoplay
]);

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})

export class SlidesComponent implements OnInit {
  articoloAperto:string;

  mainConfig: SwiperOptions = {
    slidesPerView: 1,
    /*spaceBetween: 100,*/
    pagination: {
      dynamicBullets: true
    },
    effect: 'cards',
    /*autoplay: {
      delay: 8000,    //millisecondi
      disableOnInteraction: true
    }*/
  }

  constructor() { }

  @Input() items

  ngOnInit() {}

  onSwiper(swiper){
    console.log(swiper);
  }
  onSlideChange(){
    const backgroundColor = this.randomColor();
    document.getElementById('swiper-container').style.backgroundColor = backgroundColor;
    console.log('background: ' + backgroundColor);
  }

  apriArticolo(url:string){
    this.articoloAperto = url;
    console.log('articolo aperto: \n' + this.articoloAperto);    
    document.getElementById('leggi-articolo-container').style.height = '75vh';
  }

  chiudiArticolo(){
    document.getElementById('leggi-articolo-container').style.height = '0';
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
