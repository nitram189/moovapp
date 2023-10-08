import { Main, Row, SearchSection } from "../components";
import { requests } from "../request";


export default function Home({ handleModal }) {

  return (
    <div>
      <Main />

      <SearchSection handleModal={ handleModal }/>
      
      <Row 
        rowId={ 1 }
        rowTitle={ 'Up Coming' }
        fetchUrl={ requests.requestUpcoming }
        handleModal={ handleModal }/>
      <Row 
        rowId={ 2 }
        rowTitle={ 'Top Rated' }
        fetchUrl={ requests.requestTopRated }
        handleModal={ handleModal }/>
      <Row 
        rowId={ 3 }
        rowTitle={ 'Trending' }
        fetchUrl={ requests.requestTrending }
        handleModal={ handleModal }/>
      <Row 
        rowId={ 4 }
        rowTitle={ 'Popular' }
        fetchUrl={ requests.requestPopular }
        handleModal={ handleModal }/>
    </div>
  )
}
