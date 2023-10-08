

import { AiFillPlayCircle, AiFillPlusCircle } from 'react-icons/ai';

const url = 'https://image.tmdb.org/t/p/w500';

export default function SearchMovieCard({ movie, handleModal, handleSelectedMovie }) {

  const { id, title, overview, release, image, vote } = movie;

  const rate = vote.toFixed(2);

  const year = release.slice(0, 4);

  return (
    <>

    </>

    // <>
    //   <div
    //     onClick={() => {
    //       handleSelectedMovie( movie )
    //       handleModal()
    //     }}
    //     className="flex flex-col rounded w-full bg-white/20 text-white hover:scale-110 ease-in-out duration-500 cursor-pointer">
    //     <img
    //       src={`${ url }${ image }`}
    //       alt={`${ title } movie cover`}
    //       className="rounded-t-sm"/>
      
    //     <div className='p-2'>
    //       <p className='text-sm py-2'>TMDB: <span className='text-green-500'>{ rate }/10</span></p>

    //       <div className="flex justify-between items-center w-full">

    //         <div className='w-9/12'>
    //           <h4 className="font-semibold">{ title }</h4>
    //           <p className='text-sm text-gray-300'>{ year }</p>
    //         </div>

    //         <button
    //           className='text-gray-200 hover:text-white'>
    //           <AiFillPlayCircle size={30}/>
    //         </button>

    //         <button
    //           type='button'
    //           className='text-gray-200 hover:text-white'>
    //             <AiFillPlusCircle size={30}/>
    //       </button>
    //       </div>

    //     </div>
    //   </div>

    // </>

  )
}
