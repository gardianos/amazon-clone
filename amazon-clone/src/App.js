import React, {useEffect} from 'react'
import './App.css';
import Header from './Header';
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';

function App() {

    const [{}, dispatch] = useStateValue()

    // useEffect run only when the app component loads
    useEffect(() => {

      auth.onAuthStateChanged(authUser => {
        console.log('The user is ', authUser)

        if (authUser){
          // the user just login/the user was logged in 
          dispatch({
            type:'SET_USER',
            user: authUser
          })
        } else{
          // user is logged out 
          dispatch({
            type:'SET_USER',
            user: null
          })
        }
      })

    }, [])

  return (
    <Router>
        
    <div className="app">
   
      <Switch>
        {/*Login route */}
      <Route path="/login">
      <Login />
      </Route>
       {/*Checkout route route */}
      <Route path="/checkout">
      <Header/>
      <Checkout />
      </Route>

      <Route path="/">
      <Header/>
     <Home/>
      </Route>

      </Switch>
    
    </div>
    </Router>
  );
}

export default App;
