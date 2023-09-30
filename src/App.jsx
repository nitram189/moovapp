import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Account from "./pages/Account";
import { ProtectedRoute } from "./components/ProtectedRoute";


export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            } />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  )
}
