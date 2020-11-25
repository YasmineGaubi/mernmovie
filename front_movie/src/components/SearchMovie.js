import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios'
import SearchIcon from '@material-ui/icons/Search';
import MovieList from './MovieList';


const API_KEY= 'fcc476f5'


export default function SearchMovie(props) {

        const [searchTerm, setSearchTerm] = useState("");
        const [results, setResults] = useState([])

        const API_ENDPOINT=`http://localhost:3100/movies/search/${searchTerm}` 

        // const API_ENDPOINT=`http://www.omdbapi.com/?i=tt3896198&apikey=ce8f84bf&s=${searchTerm}` 


        const handleSearchChange = event => {
          setSearchTerm(event.target.value);
          // if (searchTerm.length>4) {
            
          //   axios.get(API_ENDPOINT)
          //   .then((response) => setResults(response.data.Search))
          // }

        } // function t3ayet lfunction

        const handleSearchSubmit = event => {
          event.preventDefault();
          axios.get(API_ENDPOINT)
          .then((response) => {

            setResults(response.data.data.Search)  ;
            console.log("dataa",response.data);

          })
          
            console.log("You searched for ",searchTerm);
        };
          
        return (
            <div style={{marginLeft: 'auto', marginTop:55,display: 'grid',justifyContent: 'center'}}>
            <h2>{props.title}</h2>

        <div className="header">
           <form onSubmit={handleSearchSubmit}>
            <input
             type="text"
             onChange={handleSearchChange}
             value={<SearchIcon/>,searchTerm}
             />
             <button style={{display:'none'}} type="Submit">Search</button>
           </form>
        </div>
            <h4>You are searching for: </h4>
            <p>{searchTerm}</p>
            {/* <p>{JSON.stringify(results)}</p> */}
            <MovieList posters={results}/>

            <h4>Number of views: {props.numberOfViews} </h4>
            {/* <MoviesSearchList/> */}
          </div>
        )
    }



