import SavedMovies from "../components/SavedMovies";

export default function Account({ handleModal }) {

  return (
    <>
      <div className="w-full h-[250px] bg-[url('/bg-signup-netflix.webp')] bg-center flex justify-center items-center relative">

        <div className="absolute w-full h-[250px] top-0 left-0 bg-black/80">
  
          <h1 className="text-white text-3xl font-bold absolute bottom-10 left-11">Your list</h1>
        </div>
      </div>

      <SavedMovies handleModal={ handleModal }/>
    </>
    
  )
}
