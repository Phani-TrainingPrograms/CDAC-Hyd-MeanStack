//Demo for accessing REST END POINT FROM NODEJS
import React, { useContext, createContext } from 'react'
import { useState } from 'react'
export const MovieContext = createContext([])

const baseUrl = "http://localhost:1234/movies"

//Repo Component that has all the APIs required for Application development. 
const MovieStore = ()=>{
    const { movieData, setMovieData} = useContext(MovieContext)

    const records = movieData.map((m)=>{
        return (
            <div>
                <h2>{m.title}</h2>
                <hr/>
                <p>Director: {m.director}</p>
                <p>Rating: {m.rating}</p>
            </div>
        )
    })
    //Axios is library for making HTTP Calls in react. 
    const handleFetch = () =>{
        fetch(baseUrl).then((res)=> res.json())
        .then((data)=>{
            setMovieData(data)
        })
    }
    return (
        <div>
            <h1>Movie Database Software</h1>
            <button onClick={handleFetch}>Get Movies</button>
            <div>{records}</div>
        </div>
    )
}
export default function Ex19FetchApiExample() {
  const [movieData, setMovieData ] = useState([])

  return (
    <div>
        <MovieContext.Provider value={{ movieData, setMovieData}}>
            <MovieStore/>
        </MovieContext.Provider>
    </div>
  )
}
