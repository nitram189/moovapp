import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"


export default function Navbar() {

  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/')

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="p-5 md:p-10 flex justify-between z-[100] absolute items-center w-full">

      <Link
        to='/'
        className="text-red-500 text-4xl font-extrabold uppercase">moovapp
      </Link>

      { user?.email
          ?  <div>
                <Link to='/account'>
                  <button
                    className="mr-5 bg-black/10 px-3 py-1 rounded text-white">
                      My favorites
                  </button>
                </Link>        

                <button
                  onClick={ handleLogOut }
                  className="bg-red-600 px-3 py-1 rounded text-white hover:bg-red-700">
                    Log Out
                </button>
              </div>

          : <div>
              <Link to='/login'>
                <button className="mr-5 border border-gray-300 text-gray-300 px-3 py-1 hover:bg-white/20 hover:text-white duration-200 ease-in rounded">
                  Log In
                </button>
              </Link>
      
              <Link to='/signup'>
                <button className="bg-red-500 px-3 py-1 rounded hover:bg-red-700 text-white duration-200 ease-in">
                  Sign Up
                </button>
              </Link>
            </div>
      }
    </div>
  )
}
