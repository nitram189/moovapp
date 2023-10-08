import { useEffect, useState } from "react"
import RowMovie from "./RowMovie";
import { getRowMovies } from "../../services";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


export default function Row({ rowId, rowTitle, fetchUrl, handleModal }) {

  const [ rowMovies, setRowMovies ] = useState([]);

  useEffect(() => {
    getRowMovies({ fetchUrl })
      .then( setRowMovies )
  }, [ fetchUrl ])

  const slideLeft = () => {
    let slider = document.getElementById( rowId );
    slider.scrollLeft -= 500;
  }
  const slideRight = () => {
    let slider = document.getElementById( rowId );
    slider.scrollLeft += 500;
  }

  return (
    <section className="px-5 md:px-10">
      <h2 className="text-white font-bold md:text-xl py-2">{ rowTitle }</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={ slideLeft }
          className="bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer duration-200 ease-in z-10 hidden group-hover:block absolute left-0" size={40} />
        <div
          id={ rowId }
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          
        { rowMovies?.map(( movie ) => (
          <RowMovie
            key={ movie.id }
            movie={ movie }
            handleModal={ handleModal }/>
        ))}
        </div>
        <MdChevronRight
          onClick={ slideRight }
          className="bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer duration-200 ease-in z-10 hidden group-hover:block  right-0" size={40} />
      </div>
    </section>
  )
}
