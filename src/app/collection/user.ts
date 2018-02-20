import { Movie } from '../movie/movie';

export class User {
  id: number;
  name: string;
  budget: number;
  movieCollection: Movie[];
}
