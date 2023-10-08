
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

export default function RowMovie({ movie, handleModal }) {

    const [ like, setLike ] = useState( false );
    const [ saved, setSaved ] = useState( false );
    const { user, handleSelectedMovie } = UserAuth();

    const movieId = doc(db, 'users', `${ user?.email }`);

    const saveMovie = async () => {
      if( user?.email ) {
        setLike( !like )
        setSaved( true )
        await updateDoc( movieId, {
          savedMovies: arrayUnion({
            id: movie.id,
            title: movie.title,
            backdrop: movie.backdrop,
            overview: movie.overview,
            release: movie.release
          })
        })
      }
      else {
        alert('Please log in to save a movie')
      }
    }

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block p-2 cursor-pointer relative hover:scale-110 ease-in-out duration-300">
      <img
        src={ `https://image.tmdb.org/t/p/w500${ movie?.backdrop }`}
        alt={`${ movie?.title } cover movie`}
        className="w-full h-auto block" />

      <div className="absolute top-0 left-0 w-full h-full text-white opacity-0 hover:bg-black/80 hover:opacity-100 duration-200 ease-in-out">

        <p 
          onClick={() => {
            handleModal(),
            handleSelectedMovie( movie )}}
          className="text-sm flex justify-center items-center h-full">{ movie?.title }</p>

        <p onClick={ saveMovie }>
          { like ? <FaHeart className='absolute top-5 left-5' /> : <FaRegHeart className='absolute top-5 left-5' /> }</p>
      </div>
    </div>
  )
}
