import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { BsFillTrash3Fill } from 'react-icons/bs';

export default function SavedMovies({ handleModal }) {

    const [ favMovies, setFavMovies] = useState([]);
    const { user, handleSelectedMovie } = UserAuth();


    useEffect(() => {
      onSnapshot(doc( db, 'users', `${ user?.email }`), (doc) => {
        setFavMovies( doc.data()?.savedMovies )
    });
    }, [ user?.email ]);

    const slideLeft = () => {
      let slider = document.getElementById('slider');
      slider.scrollLeft -= 500;
    }
    const slideRight = () => {
      let slider = document.getElementById('slider');
      slider.scrollLeft += 500;
    }

    const movieRef = doc( db, 'users', `${ user?.email }`)

    const deleteMovie = async ( passedId ) => {
        try {
          const updatedFavMovies = favMovies.filter((movie) => movie.id !== passedId );
          await updateDoc( movieRef, {
            savedMovies: updatedFavMovies
          });
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
          { favMovies?.length === 0 
            ? <p className="text-white font-bold md:text-xl p-5 md:p-10">There are no selected movies yet.</p>
            : <h2 className="text-white font-bold md:text-xl p-5 md:p-10">Have a look at your list of movies</h2> }

          <div className="relative flex items-center group">
            
            <MdChevronLeft
              onClick={ slideLeft }
              className="bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer duration-200 ease-in z-10 hidden group-hover:block absolute left-10" size={40} />
            
            <div
              id='slider'
              className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative px-5 md:px-10">
            
            { favMovies?.map(( movie ) => (
              <div
                key={ movie?.id }
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block p-2 cursor-pointer relative">
                <img
                  src={ `https://image.tmdb.org/t/p/w500${ movie?.backdrop }`}
                  alt={`${ movie?.title } cover image`}
                  className="w-full h-auto block" />
        
                <div className="absolute top-0 left-0 w-full h-full text-white opacity-0 hover:bg-black/80 hover:opacity-100 duration-200 ease-in-out">
        
                  <p onClick={() => {
                    handleModal(),
                    handleSelectedMovie( movie )
                  }}
                    className="text-sm flex justify-center items-center h-full">{ movie?.title }</p>

                  <p
                    onClick={() => deleteMovie( movie?.id )}
                    className="absolute text-gray-300 top-5 right-5"><BsFillTrash3Fill/></p>
                </div>
              </div>
            ))}

            </div>
            
            <MdChevronRight
              onClick={ slideRight }
              className="bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer duration-200 ease-in z-10 hidden group-hover:block absolute right-10" size={40} />
          </div>
        </>
      )
    }
    