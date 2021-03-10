import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import React, { useEffect } from 'react'
import { auth } from './firebase'
import { useStateValue } from './components/StateProvider'
import Payment from './components/Payment'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './components/Orders'

const promise = loadStripe('pk_test_51ILl3hJHqeTJW6cYJxRaKH7dC5vZBaLEQmrCQS0wnsbZXs1r6agPV2pBEwvlhVUMf5I1QWsAv5ZwpZTJYYwhCDSr00WhSmxyP8')



function App() {

  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    
    auth.onAuthStateChanged(authUser => {
      console.log(authUser)

      if (authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })

  }, [user])


  return (
    <Router>
      <div className="App">

        {/* Header */}

        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/signin">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route>
            <center>404 : Not Found</center>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
