import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";



export default function Navbar() {

  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/')

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="xs:px-5 md:p-10 px-2 py-5 flex justify-between absolute items-center w-full z-10">

      <Link to='/'
        className="text-red-500 sm:text-2xl md:text-4xl text-xl font-extrabold uppercase">
          moovapp
      </Link>
      
        { user?.email
          ? <div className="flex items-center sm:gap-5 gap-2">
              { 
                location.pathname === '/login'
                ? null 
                : <Link to='/account'>
                    <button
                      className="py-1 text-white">
                        My list
                    </button>
                  </Link> 
              }

              <button
                onClick={ handleLogOut }
                className="bg-red-600 px-3 py-1 rounded text-white hover:bg-red-700 text-sm sm:text-base">
                  Log Out
              </button>
              </div>

          : <div>
              <Link to='/login'>
                <button className="sm:mr-5 mr-2 border border-gray-300 text-gray-300 px-3 py-1 hover:bg-white/20 hover:text-white duration-200 ease-in rounded text-sm sm:text-base">
                  Log In
                </button>
              </Link>
      
              <Link to='/signup'>
                <button className="bg-red-500 px-3 py-1 rounded hover:bg-red-700 text-white duration-200 ease-in text-sm sm:text-base">
                  Sign Up
                </button>
              </Link>
            </div>
      }
      </div>
  )
}
