import React from 'react'

function movies(props) {
  return (
    <div>
      <div>
            
            <h1>Movie name: {props.mname}</h1>
            <p>Year of release: {props.year}</p>
            <p>Rating: {props.rate}</p>
        </div>
    </div>
  )
}

export default movies;
