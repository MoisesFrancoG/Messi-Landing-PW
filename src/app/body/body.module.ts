import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { StatsComponent } from './body/stats/stats.component';
import { TrophiesComponent } from './body/trophies/trophies.component';
import { BiographyComponent } from './body/biography/biography.component';



@NgModule({
  declarations: [
    BodyComponent,
    StatsComponent,
    TrophiesComponent,
    BiographyComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BodyComponent,
  ]
})
export class BodyModule { }
