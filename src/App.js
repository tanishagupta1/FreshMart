import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { auth } from "./firebase"
import {useStateValue} from './StateProvider'

function App() {

const [{},dispatch] = useStateValue();

  useEffect(() => {
    //this will run only once when the app is loaded
    auth.onAuthStateChanged(authUser => {
      console.log("The user>> ", authUser);

      if (authUser) {
        //The user is logged in / was logged in

         dispatch({
          type:'SET_USER',
          user:authUser
         })
      }
      else {
        //logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }

    })
  }, [])

  return (
    <BrowserRouter>
      <div className="app">

        <Routes>
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/login" element={<><Login /></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
