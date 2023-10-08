'use client';

import { useState } from "react";
import { getMoviesBySearch } from "../../services";
import SearchForm from "./SearchForm";
import { RowMovie } from './';


export default function SearchSection({ handleModal }) {

  const [ movies, setMovies ] = useState([]);

  const handleMovieSearch = ( title ) => {
    getMoviesBySearch( title )
      .then( setMovies )
  }
  const mappedMovies = movies.filter(( movie ) => movie.backdrop !== null );


  return (
    <>
      <section className="lg:p-16 sm:p-10 p-5 w-full">
        <h3 className="text-white text-3xl font-semibold pb-10">Find the movie you're looking for</h3>

        <SearchForm handleMovieSearch={ handleMovieSearch }/>
    
        <div className="w-full w-max-[1280px] mx-auto">
          { mappedMovies?.map(( movie ) => (
            <RowMovie
              key={ movie.id }
              movie={ movie }
              handleModal={ handleModal }/>
          ))}
        </div>
      </section>

      
    </>
  )
}
