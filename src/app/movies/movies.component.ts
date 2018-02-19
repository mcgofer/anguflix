import { Component, OnInit, Output } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { CollectionService } from '../services/collection.service';
import { Movie } from '../movie/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  title: string;

  constructor(private movieService: MoviesService, private collectionService: CollectionService) { }

  ngOnInit() {
    this.title = 'All Movies';
    this.movies = this.movieService.getMovies();
  }

  addMovie(movie: Movie) {
    this.collectionService.addMovie(movie);
  }

}
