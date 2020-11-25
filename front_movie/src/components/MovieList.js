import React from 'react'
import SinglePost from './SinglePost'

export default function MovieList({posters}) {
    return (
        <div style={{display:'grid',gridTemplateColumns:'33% 33% 33%'}}>

            {posters && posters.map((element,index)=> //ou : {posters?.map((element,index)=>)}
                <SinglePost key={index} element={element}/>
            )}
            {/* {JSON.stringify(posters)} */}
        </div>
    )
} 

