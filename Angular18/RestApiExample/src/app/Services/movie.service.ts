import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../Models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //URL of the end point from where I can get the data.
  baseUrl : string = "http://localhost:1234/movies"

  constructor(private http: HttpClient) { 
      //httpClient object will be provided by the Angular using DI.  
  }

  getAllMovies() : Observable<Movie[]>{
    return this.http.get<Movie[]>(this.baseUrl); 
  }

  getMovieById(id: number) : Observable<Movie>{
    return this.http.get<Movie>(`${this.baseUrl}/${id}`)
  }

  updateMovie(movie : Movie) : Observable<any>{
    const tempUrl = `${this.baseUrl}/${movie.id}`;
    return this.http.put<any>(tempUrl, movie);
  }

  addMovie(movie : Movie) : Observable<Movie>{
    return this.http.post<Movie>(this.baseUrl, movie);
  }

  deleteMovie(id: number) : Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
//9945205684
