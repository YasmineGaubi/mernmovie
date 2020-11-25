import React, {useState, useEffect } from 'react';
import SearchMovie from '../components/SearchMovie';
import PageTitle from '../components/PageTitle';
import MovieList from '../components/MovieList';


export default function Home() {
    const [ numberOfViews, setNumberOfViews ] = useState(14)
    const [results, setResults]= useState([])
    return (
        <React.Fragment>

        {/* <PageTitle title="Home page" color="#ffd1ff" maj/> */}

        <SearchMovie 
         title="Search for a movie"
         //numberOfViews={14}
         description="you can search for any type of movie"
         setResults={setResults}
        />
        
        <MovieList posters={results}/>

        </React.Fragment>
    )
}
