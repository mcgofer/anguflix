import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { CollectionService } from '../services/collection.service';
import { Movie } from './movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie = new Movie();
  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
  }

  addMovie() {
    this.collectionService.addMovie(this.movie);
  }

}
