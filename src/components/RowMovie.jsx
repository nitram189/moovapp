
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

export default function RowMovie({ movie }) {

    const [ like, setLike ] = useState( false );
    const [ saved, setSaved ] = useState( false );
    const { user } = UserAuth();

    const movieId = doc(db, 'users', `${ user?.email }`);

    const saveMovie = async () => {
      if( user?.email ) {
        setLike( !like )
        setSaved( true )
        await updateDoc( movieId, {
          savedMovies: arrayUnion({
            id: movie.id,
            title: movie.title,
            img: movie.backdrop,
          })
        })
      }
      else {
        alert('Please log in to save a movie')
      }
    }

  return (
    <div
      key={ movie?.id }
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block p-2 cursor-pointer relative">
        <img
          src={ `https://image.tmdb.org/t/p/w500${ movie?.backdrop }`}
          alt={`Cover related to this movie: ${ movie?.title }`}
          className="w-full h-auto block" />

        <div className="absolute top-0 left-0 w-full h-full text-white opacity-0 hover:bg-black/80 hover:opacity-100 duration-200 ease-in-out">

          <p className="text-sm flex justify-center items-center h-full">{ movie?.title }</p>

          <p onClick={ saveMovie }>
            { like ? <FaHeart className='absolute top-5 left-5' /> : <FaRegHeart className='absolute top-5 left-5' /> }</p>
        </div>
    </div>
  )
}
