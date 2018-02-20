import { Component, OnInit, Input } from '@angular/core';
import { CollectionService } from '../services/collection.service';
import { Movie } from '../movie/movie';
import { User } from '../collection/user';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  movies: Movie[];
  title: string;
  user: User;
  searchText: string;

  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    this.title = 'My Collection';
    this.movies = this.collectionService.getMovies();
    this.user = this.collectionService.getUser();
  }

  removeMovie(movie: Movie) {
    this.collectionService.removeMovie(movie);
  }

}
