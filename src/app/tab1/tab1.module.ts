import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
 
//sanitize HTML
import { SafePipe } from '../pipes/safe.pipe';

//swiper
import { SwiperModule } from 'swiper/angular';
import { SlidesComponent } from '../slides/slides.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SwiperModule
  ],
  declarations: [
    Tab1Page, 
    SlidesComponent,
    SafePipe
  ]
})
export class Tab1PageModule {}
