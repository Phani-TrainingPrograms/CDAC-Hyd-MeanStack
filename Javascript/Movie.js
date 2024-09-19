//This is a class that represents a real time movie data.
class Movie{
    //This is a function that is invoked when U create an instance(variable/object) of this class. 
    constructor(id, title, director, rating){
        this.id = id;
        this.title = title;
        this.director = director;
        this.rating = rating;
    }
}

//This class represents all the movies that U want to store in UR Application. U shall have all the operations like insertion, deletion, updation and extraction from this storage. 
class MovieRepository{
    movieDb = [
        new Movie(1, 'Bahubali 1', 'SS Rajamouli', 5.5),
        new Movie(2, 'Bahubali 2', 'SS Rajamouli', 6.5),
        new Movie(3, 'Jawan', 'Atlee', 6.5),
        new Movie(4, 'Tiger zinda Hai', 'Kabir Khan', 7.5),
        new Movie(5, 'Fighter', 'Sidharth Anand', 8.5)
    ]; //this is a blank array of movie objects. 

    addMovie = function(movie){
        this.movieDb.push(movie);//Using the function of the Array class to add an item to the bottom of the Array. 
    }

    getAllMovies = () => this.movieDb;

    //find method can also be used. 
    getMovieById = function(id){
        for (const movie of this.movieDb) {
            if(movie.id == id){
                return movie;
            }
        }
    }

    updateMovie = function(id, updatedMovie){
        //Find the index of the movie with the matching id.
        const index = this.movieDb.findIndex(m => m.id == id);//get the index of that movie that matches the Id  
        if(index < 0){
            alert("Movie is not found to update");
            return;//exit the function
        }
        //Update the details of that found movie with the updatedMovie details
        this.movieDb.splice(index, 1, updatedMovie)
        //exit the function 
    }

    deleteMovie = function(id){
        const index = this.movieDb.findIndex(m => m.id == id);
        if(index < 0){
            alert("Movie is not found to delete");
            return;//exit the function
        }
        //Update the details of that found movie with the updatedMovie details
        this.movieDb.splice(index, 1);
    }

    modifyMovie = function(id, updatedMovie){ //if movie is not provided, it means delete. 
        const index = this.movieDb.findIndex(m => m.id == id);
        if(index < 0){
            alert("Movie details are not found to modify")
        }else{
            if(!updatedMovie){
                this.movieDb.splice(index, 1);
            }else{
                this.movieDb.splice(index, 1, updatedMovie);
            }
        }
    } 
}