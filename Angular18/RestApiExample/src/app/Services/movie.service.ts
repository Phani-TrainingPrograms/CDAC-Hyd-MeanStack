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
}
