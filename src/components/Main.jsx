import { useEffect, useState } from "react";
import { getMoviesMain } from "../../services";
import MainMovie from "./MainMovie";

export default function Main() {

  const [ movies, setMovies ] = useState([]);

  const movie = movies[ Math.floor( Math.random() * movies.length )];

  useEffect(() => {
    getMoviesMain()
      .then( response => setMovies( response ))
  }, []);

  return (
    <main className="w-full h-[550px]">
      <div className="w-full h-full">
        <div className="absolute bg-gradient-to-r from-black/70 to-black/60 w-full h-[550px] "></div>
        <img
          src={ `https://image.tmdb.org/t/p/original${ movie?.backdrop }`}
          alt={`Title of the movie ${ movie?.title }`}
          className="w-full h-full object-cover"/>

        <MainMovie movie={ movie }/>
      </div>
    </main>
  )
}
