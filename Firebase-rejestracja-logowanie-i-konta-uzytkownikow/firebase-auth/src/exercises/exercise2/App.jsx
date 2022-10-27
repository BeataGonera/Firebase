import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import { AuthenticatedHomePage } from "../../authenticated/AuthenticatedHomePage";
import { GuestHomePage } from "../../guest/GuestHomePage";
import { RegisterForm } from "../../guest/RegisterForm";
import { auth } from "../../firebase";
import { useEffect } from "react";
import { Link } from 'react-router-dom'

export default function App() {
  const handleLogin = ({ email, password }) =>
    signInWithEmailAndPassword(auth, email, password).then(console.log);

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      console.log(currentUser)

      return unsubscribe
    })
  },[])

  if(currentUser){
    return(
    <AuthenticatedHomePage currentUser={currentUser}/> 
    )
  }

  return (
    <>
      <Link to="/">Login</Link>
      <Link to="/register">Register</Link>
    <Routes>
      <Route path="/" element={<GuestHomePage onLogin={handleLogin} />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
    </>
  );
}
