import { AiFillCloseCircle } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';

const url = 'https://image.tmdb.org/t/p/original';

export default function MovieModal({ handleModal }) {

  const { selectedMovie } = UserAuth();

  return (
    <div className="w-full space-y-4 px-5 md:px-10">
    
      <img
        src={ `${ url }${ selectedMovie?.backdrop }`}
        alt={`Title of the movie ${ selectedMovie?.title }`}
        className="w-full h-full object-cover"/>
          
      <h2 className="text-3xl lg:text-5xl font-bold text-white">{ selectedMovie?.title }</h2>

      <div className="flex justify-between">
        <div>
          <button className="border border-gray-200 bg-gray-200 px-5 py-2 hover:bg-transparent hover:text-white duration-200 ease-in rounded-sm mr-5">
            Play
          </button>

          <button className="border border-gray-300 text-gray-300 px-5 py-2 hover:bg-white/20 hover:text-white duration-200 ease-in rounded-sm">
            Watch Later
          </button>
        </div>

        <button
          type='button'
          onClick={ handleModal }>
            <AiFillCloseCircle size={40} color='white'/>
        </button>
      </div>

      <p className="text-sm text-gray-400">Released on { selectedMovie?.release }</p>
      <h4 className="text-white w-full">{ selectedMovie?.overview }</h4>
    </div>
  )
}



    