import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../services/collection.service';
import { Movie } from '../movie/movie';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  movies: any[];
  title: string;

  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    this.title = 'My Collection';
    this.movies = this.collectionService.getMovies();
  }

}
