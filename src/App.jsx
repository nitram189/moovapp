import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Footer, Navbar, MovieModal } from "./components";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Account from "./pages/Account";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black',
    border: 'none',
    width: '100%',
    maxWidth: '800px',
  },
  overlay: {
    backgroundColor: '#000000bc',
    zIndex: 1000
  }
};

Modal.setAppElement('#root');


export default function App() {

  const [ modal, setModal ] = useState(false);

  const handleModal = () => {
    setModal( !modal )
  }

  return (
    <>
      <AuthContextProvider>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home handleModal={ handleModal }/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account handleModal={ handleModal }/>
              </ProtectedRoute>
            } />
        </Routes>
        <Footer />
        
        <Modal
          isOpen={ modal }
          onRequestClose={ handleModal }
          style={ customStyles }>
            <MovieModal
              modal={ modal }
              handleModal={ handleModal }
              />
        </Modal>

      </AuthContextProvider>
    </>
  )
}
