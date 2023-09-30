import { requests } from "../src/request";

export async function getMoviesMain() {
    
  const res = await fetch( requests.requestPopular )
    if ( !res.ok ) {
        throw new Error('Oops, somenthing went wrong :/')
    }
  const { results } = await res.json();

  const mappedResults = results.map(( movie ) => {
    const { id, title, overview, poster_path: poster, release_date: release, backdrop_path: backdrop } = movie;

    return { id, title, overview, poster, release, backdrop }
  })

  return mappedResults  
}

////////////////////////////////////////////////////////////

export async function getRowMovies({ fetchUrl }) {

  const res = await fetch( fetchUrl )

  if( !res.ok ) {
      throw new Error('Oops something went wrong :/');
  }
  const { results } = await res.json();

  const mappedResults = results.map(( movie ) => {
      const { id, title, backdrop_path: backdrop } = movie;
      
      return { id, title, backdrop }
  })
  return mappedResults
}