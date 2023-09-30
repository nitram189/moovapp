import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";


export default function SignUp() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState( false );
  const [ loginError, setLoginError ] = useState('');

  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if( email.length <= 1 || password.length <= 1 ) {
      setLoginError('');
      setError( true )
      return
    }
    setError( false )
    setLoginError('')

    try {
      await signUp( email, password )
      navigate('/')
    }
    catch (error) {
      console.log( error )
      setLoginError( error.message )
    }
  }

  return (
    <>
      <div className="w-full h-screen sm:bg-[url('/bg-signup-netflix.webp')] bg:black bg-cover bg-top flex justify-center items-center">

        <div className="absolute w-full h-screen bg-black/50 z-[10]"></div>

        <div className="bg-black/90 max-w-[500px] h-[500px] w-full rounded px-10 py-16 z-[50]">

          <h1 className="text-white text-3xl font-semibold pb-5">Sign Up</h1>

          { error && <p className="text-white text-center py-3 border border-red-500 mb-5 rounded">Please complete both fields to Log In.</p> }

          { loginError && <p className="text-white text-center py-3 border border-red-500 mb-5 rounded">{ loginError  }</p> }

          <form
            onSubmit={ handleSubmit }
            className="space-y-5">
            <input
              type="email"
              onChange={ e => setEmail( e.target.value )}
              placeholder="Email"
              className="block w-full mx-auto p-2 rounded bg-white/30 text-white" />
            
            <input
              type="password"
              onChange={ e => setPassword( e.target.value )}
              placeholder="Password"
              className="block w-full mx-auto p-2 rounded bg-white/30 text-white" />

            <div className="w-full mx-auto">
              <button
                type="submit"
                className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-700 duration-200 ease-in">
                  Sign Up
              </button>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-300">
              <input
                type='checkbox'
                className="mr-2"/>Remember me
              </p>

                <Link to='#' className="text-gray-300 hover:text-white duration-200 ease-in">Need help?</Link>
            </div>

            <p className="text-gray-300 py-5">Already subscribed to Moovap?{' '}
              <span className="font-semibold text-white">
              <Link to='/login'>
                Log In
              </Link>
              </span></p>
          </form>
        </div>
      </div>
    </>
  )
}
