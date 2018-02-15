import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[];
  title: string;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.title = 'All Movies';
    this.movies = this.movieService.getMovies();
  }

}
