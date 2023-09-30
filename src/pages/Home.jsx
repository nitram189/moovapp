import { Main, Row } from "../components";
import { requests } from "../request";


export default function Home() {

  return (
    <div>
      <Main />
      <Row rowId={ 1 } rowTitle={ 'Up Coming' } fetchUrl={ requests.requestUpcoming }/>
      <Row rowId={ 2 } rowTitle={ 'Top Rated' } fetchUrl={ requests.requestTopRated }/>
      <Row rowId={ 3 } rowTitle={ 'Trending' } fetchUrl={ requests.requestTrending }/>
      <Row rowId={ 4 } rowTitle={ 'Popular' } fetchUrl={ requests.requestPopular }/>
    </div>
  )
}
