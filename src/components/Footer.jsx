import { Link } from "react-router-dom"


export default function Footer() {

    return (
      <div className="pb-5 pt-20 w-full">
  
        <footer
          className="flex flex-col justify-center text-sm text-white">
  
          <div className="flex flex-col gap-10 lg:gap-20 sm:flex-row justify-center p-10">
              <h5>© moovap - 2023</h5>
  
              <div className="flex flex-col space-y-2">
                  <h6 className="uppercase font-semibold">YouTube Channels</h6>
  
                  <Link to='https://www.youtube.com/@codecommerce' target="_blank"
                  className="text-gray-400 hover:text-white duration-200 ease-in">
                      Code Commerce
                  </Link>
                  
                  <Link to='https://www.youtube.com/@midulive' target="_blank"
                  className="text-gray-400 hover:text-white duration-200 ease-in">
                      Midulive
                  </Link>

                  <Link to='https://www.youtube.com/@carpicoder' target="_blank"
                  className="text-gray-400 hover:text-white duration-200 ease-in">
                      Carpi Coder
                  </Link>
              </div>
  
              <div className="flex flex-col space-y-2">
                <h6 className="uppercase font-semibold">API PROVIDER</h6>
  
                <Link to='https://themoviedb.org' target="_blank"
                className="text-gray-400 hover:text-white duration-200 ease-in">
                TMDB - The Movie Database</Link>
              </div>
          </div>
  
          
          <div className="border-t border-white/70 text-center w-3/4 mx-auto">
              <h5 className="pt-5">All rights reserved. Website developed by{' '}
              <Link
                href='https://www.linkedin.com/in/martinolivera1989/' target="_blank"
                style={{ fontWeight: 'bold' }}>
                  Martin Olivera
              </Link>
              </h5>
          </div>
         
        </footer>
      </div>
    )
  }
  