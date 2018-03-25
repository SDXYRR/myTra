import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { CarouselComponent } from './firstpage/carousel/carousel.component';
import { NowplayingComponent } from './nowplaying/nowplaying.component';
import { FilmsComponent } from './nowplaying/films/films.component';
import { CommingsonComponent } from './commingson/commingson.component';
import { FlimsTComponent } from './commingson/flims-t/flims-t.component';
import { HeaderComponent } from './header/header.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { IsHotPlayingComponent } from './films-list/is-hot-playing/is-hot-playing.component';
import { IsCommingComponent } from './films-list/is-comming/is-comming.component';
import { GetDaysPipe } from './get-days.pipe';
import { CenimesComponent } from './cenimes/cenimes.component';
import { CinemaFComponent } from './cenimes/cinema-f/cinema-f.component';
import { CutDownPipe } from './cut-down.pipe';
import { CityListComponent } from './city-list/city-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    CarouselComponent,
    NowplayingComponent,
    FilmsComponent,
    CommingsonComponent,
    FlimsTComponent,
    HeaderComponent,
    LeftmenuComponent,
    FilmsListComponent,
    IsHotPlayingComponent,
    IsCommingComponent,
    GetDaysPipe,
    CenimesComponent,
    CinemaFComponent,
    CutDownPipe,
    CityListComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
