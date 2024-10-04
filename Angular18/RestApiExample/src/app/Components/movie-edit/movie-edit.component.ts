import { Component } from '@angular/core';
import { Movie } from '../../Models/movie';
import { MovieService } from '../../Services/movie.service';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movie-edit.component.html',
  styles: ``
})
export class MovieEditComponent {
  //create a field to hold the selected record
  selectedMovie : Movie = {} as Movie;
  //create a field to hold the id of the record that U get from the Querystring. 
  id : number = 0;
  message : any = {}
  //create a constructor to inject the service and a service to get the routed information.
  constructor(private service : MovieService, private activatedRoute : ActivatedRoute) {
    
  }

  //implement the OnInit interface to set the value from the Http to the field that holds the record. 
  ngOnInit(): void {
    //get the Id:
    this.activatedRoute.paramMap.subscribe((parameters : ParamMap) =>{
      this.id = parseInt(parameters.get("id")!)
      this.service.getMovieById(this.id).subscribe((data : Movie)=>{
        this.selectedMovie = data;
      })      
    })
  }

  onUpdate(){
    this.service.updateMovie(this.selectedMovie).subscribe((data : any)=>{
      this.message = data;
    })
  }
}
