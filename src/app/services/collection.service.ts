import { Injectable } from '@angular/core';
import { Movie } from '../movie/movie';


const myCollection: Movie[] = [];

@Injectable()
export class CollectionService {
  myMovies: Array<Movie> = myCollection;


  constructor() { }

  getMovies(): Array<Movie> {
    return this.myMovies;
  }

  _movieExist(movie: Movie): boolean {
    let index = this.myMovies.findIndex((currItem => currItem.id === movie.id));
    return index > -1;
        }

  addMovie(newMovie: Movie) {
    if (!this._movieExist(newMovie)) {
        this.myMovies.push(newMovie);
      }
    }
  }
