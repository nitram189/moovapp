

export default function MainMovie({ movie }) {

  const truncateString = ( str, num ) => {
    if( str?.length > num ) {
        return str.slice(0, num) +  '...';
    }
    else {
        return str
    }
  }

  return (
    
    <div className="absolute w-full top-[35%] space-y-4 px-5 md:px-10">
          
      <h2 className="text-3xl lg:text-5xl font-bold text-white">{ movie?.title }</h2>

      <div>
        <button className="border border-gray-200 bg-gray-200 px-5 py-2 hover:bg-transparent hover:text-white duration-200 ease-in rounded-sm mr-5">
          Play
        </button>

        <button className="border border-gray-300 text-gray-300 px-5 py-2 hover:bg-white/20 hover:text-white duration-200 ease-in rounded-sm">
          Watch Later
        </button>
      </div>

      <p className="text-sm text-gray-400">Released on { movie?.release }</p>
      <h4 className="text-white w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] ">{ truncateString( movie?.overview, 180 ) }</h4>
    </div>
  )
}
