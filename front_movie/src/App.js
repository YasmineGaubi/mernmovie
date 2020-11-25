import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import BucketList from './pages/BucketList';
import MovieAdd from './components/MovieAdd'
import AppNavbar from "./components/Navbar";
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute';


export default function App(){  
  
  return ( 
    <Router>
      <AppNavbar />
        <Switch>
        <Redirect exact from="/" to="/home"/>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/bucket-list">
          <MovieAdd />
        </Route>
        <ProtectedRoute path="/list" component={BucketList}/>
      </Switch>
    </Router>  
  )
}