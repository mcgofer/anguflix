import { Injectable } from '@angular/core';
import { Movie } from '../movie/movie';
import { User } from '../collection/user';

const myCollection: Movie[] = [];

const allUsers: User[] = [{
    id: 1, name: 'mc', budget: 20, movieCollection: []
}];

@Injectable()
export class CollectionService {
  myMovies: Array<Movie> = myCollection;
  user: Array<User> = allUsers;

  constructor() {}

  getMovies(): Array<Movie> {
    return this.myMovies;
  }

  _movieExist(movie: Movie): boolean {
    let index = this.myMovies.findIndex(currItem => currItem._id === movie._id);
    return index > -1;
  }

  addMovie(newMovie: Movie) {
    if (!this._movieExist(newMovie)) {
      this.myMovies.push(newMovie);
      this.user[0].budget -= newMovie.price;
    }
  }

  removeMovie(movie: Movie) {
    let currInd = this.myMovies.findIndex(el => el.id === movie.id);
    this.myMovies.splice(currInd, 1);
    this.user[0].budget += movie.price;
  }

  getUser(): object {
    return this.user[0];
  }
}
