'use client';

import { useState, useRef } from "react";


export default function SearchForm({ handleMovieSearch }) {

  const [ movieName, setMovieName ] = useState('');
  const lastSearch = useRef( movieName );

  const handleSubmit = e => {
    e.preventDefault();
    if( movieName.length <= 1 ) {
      alert('Please write a valid movie name')
      return
    }
    if( movieName === lastSearch.current ) return;
    
    handleMovieSearch( movieName )
    lastSearch.current = movieName;
  }

  return (
    <form
      onSubmit={ handleSubmit }
      className="sm:flex gap-5 mb-5">

        <div className="w-full sm:w-3/4 lg:w-1/2">
          <input
            type="text"
            value={ movieName }
            onChange={(e) => setMovieName( e.target.value )}
            placeholder="Spiderman, Toy Story, . . ."
            className="p-2 rounded bg-white/20 w-full text-white"/>
        </div>

        <button
          type="submit"
          className="text-white border px-3 rounded hover:bg-white/90 hover:text-black ease-in-out duration-300 sm:mt-0 mt-5">
            Search
        </button>
    </form>
  )
}
