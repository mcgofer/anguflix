import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { CollectionComponent } from './collection/collection.component';
import { MoviesService } from './services/movies.service';
import { MovieComponent } from './movie/movie.component';
import { CollectionService } from './services/collection.service';
import { FilterPipe } from './filter.pipe';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CollectionComponent,
    MovieComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MoviesService, CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
