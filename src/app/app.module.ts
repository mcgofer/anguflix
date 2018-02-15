import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { CollectionComponent } from './collection/collection.component';
import { MoviesService } from './services/movies.service';
import { MovieComponent } from './movie/movie.component';
import { CollectionService } from './services/collection.service';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CollectionComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MoviesService, CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
