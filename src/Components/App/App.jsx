import React, { useEffect } from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router';
import About from '../About/About';
import Home from '../Home/Home';
import Navbar from '../NavBar/Navbar';
import Contact from './../Contact/Contact';
import NotFound from './../NotFount/NotFound';

import Login from '../Login/Login';
import Register from './../Register/Register';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import ProtectedRoute from './../ProtectedRoute/ProtectedRoute';
import MovieDetails from '../MovieDetails/MovieDetails';
import { MoviesMediaProvider } from '../ProviderContext/MoviesMediaProvider';






const App = () => {
    let history = useHistory()
    let [loginUser,setLoginUser]=useState(null);

    function getUserData()
    {
        let encoded = localStorage.getItem("tokenUser");
        let userData = jwtDecode(encoded);
        setLoginUser(userData)
    }


    useEffect(() =>{
        if (localStorage.getItem("tokenUser")) {
            getUserData()
        }
    },[])

    function logOut() {
        localStorage.removeItem("tokenUser");
        
        setLoginUser(null);
        history.push("/login")

    }

    return ( 
        <div>
            
          
        <Navbar loginUser={loginUser} logOut={logOut} />
       
        
      <div className="container">
      <Switch>
          <ProtectedRoute path="/movie" Component={Home}  context={MoviesMediaProvider}/>
          <ProtectedRoute path="/tv" Component={About} context={MoviesMediaProvider}/>
          <ProtectedRoute path="/person" Component={Contact} context={MoviesMediaProvider}/>
          
                <Route path="/Details/:type/:id" render={(props)=> <MovieDetails {...props} />}/>
                <Route path="/register" render={(props)=> <Register {...props} />}/>
                <Route path="/login" render={(props)=> <Login {...props} getUserData={getUserData}/>}/>
                <Redirect from="/" exact to="/movie"/>
                <Route path="*"> <NotFound/></Route>
            </Switch>
      </div>
        </div>
     );
}
 
export default App;


