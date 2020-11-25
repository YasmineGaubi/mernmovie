import React from 'react'

export default function SinglePost({element}) {
    return (
        <div style={{margin: '10px'}}>
            <h3> {element.Title} </h3> 
            <img style={{height:'54vh'}} src={element.Poster}/>
        </div>
    )
}
