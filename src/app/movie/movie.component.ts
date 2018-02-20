import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from './movie';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie = new Movie();
  @Input() btnText: string;
  @Output() movieButtonClick: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit() {
    console.log(this.btnText);
  }

  clickFunc() {
    this.movieButtonClick.emit(this.movie);
  }

}
